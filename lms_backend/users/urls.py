from django.urls import path
from .views import (RegisterView, LoginView, profile_view, AdminInstructorListView, AdminStudentListView)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', profile_view, name='profile'),
    path('admin-instructors/', AdminInstructorListView.as_view(), name='admin-instructors'),
    path('admin-students/', AdminStudentListView.as_view(), name='admin-students'),
]

