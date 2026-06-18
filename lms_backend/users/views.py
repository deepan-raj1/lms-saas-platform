from django.shortcuts import render

# Create your views here.
from rest_framework import generics 
from rest_framework import status
from .models import User
from .serializers import RegisterSerializer, LoginSerializer
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .permissions import IsInstructorOrAdmin


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