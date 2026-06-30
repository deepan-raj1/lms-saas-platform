from django.urls import path
from .views import AdminInstructorListView, RegisterView, LoginView, profile_view

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', profile_view, name='profile'),
    path('admin-instructors/', AdminInstructorListView.as_view(), name='admin-instructors'),
]

