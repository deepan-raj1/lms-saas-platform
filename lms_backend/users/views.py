from django.shortcuts import render

# Create your views here.
from rest_framework import generics 
from .models import User
from .serializers import RegisterSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .permissions import IsInstructorOrAdmin

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile_view(request):
    return Response({
        'username': request.user.username,
        'email': request.user.email,
        'role': request.user.role
    })