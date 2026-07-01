from django.shortcuts import render

# Create your views here.
from rest_framework import generics 
from rest_framework import status
from .models import User
from .serializers import RegisterSerializer, LoginSerializer, AdminInstructorSerializer, AdminStudentSerializer 
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .permissions import IsInstructorOrAdmin, IsAdminUserRole
from courses.models import Course, Enrollment

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

class LoginView(APIView):

    def post(self, request):
        serializer = LoginSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        return Response(
            serializer.validated_data,
            status=status.HTTP_200_OK
        )
    
class AdminInstructorListView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        print("========== DEBUG ==========")
        print("Authenticated:", request.user.is_authenticated)
        print("User:", request.user)
        print("Role:", getattr(request.user, "role", None))
        print("===========================")

        if request.user.role != "admin":
            return Response(
                {"detail": "Permission denied"},
                status=403
            )
        instructors = User.objects.filter(role="instructor")

        serializer = AdminInstructorSerializer(
            instructors,
            many=True
        )

        return Response(serializer.data)

# Admin view to list all students
class AdminStudentListView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        print("===== STUDENT DEBUG =====")
        print(request.user)
        print(request.user.role)
        print("========================")

        if request.user.role != "admin":
            return Response(
                {"detail": "Permission denied"},
                status=403
            )

        students = User.objects.filter(role="student")

        serializer = AdminStudentSerializer(
            students,
            many=True
        )

        return Response(serializer.data)


class AdminDashboardStatsView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        if request.user.role != "admin":
            return Response(
                {"detail": "Permission denied"},
                status=403
            )

        data = {
            "total_courses": Course.objects.count(),
            "total_instructors": User.objects.filter(
                role="instructor"
            ).count(),
            "total_students": User.objects.filter(
                role="student"
            ).count(),
            "total_enrollments": Enrollment.objects.count(),
        }

        return Response(data)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile_view(request):
    return Response({
        'full_name': request.user.full_name,
        'username': request.user.username,
        'email': request.user.email,
        'role': request.user.role,
        'mobile_number': request.user.mobile_number,
        'whatsapp_number': request.user.whatsapp_number,
    })

