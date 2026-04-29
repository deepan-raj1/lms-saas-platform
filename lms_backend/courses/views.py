from django.shortcuts import render
from rest_framework import generics
from .models import Course
from .serializers import CourseSerializer
from rest_framework.permissions import IsAuthenticated
from users.permissions import IsInstructorOrAdmin

class CourseCreateView(generics.CreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated, IsInstructorOrAdmin]

    def perform_create(self, serializer):
        serializer.save(instructor=self.request.user)

class CourseListView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]

class CourseDetailView(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticated]