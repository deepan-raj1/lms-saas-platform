from django.urls import path
from .views import CourseCreateView, CourseListView, CourseDetailView, EnrollCourseView

urlpatterns = [
    path('create/', CourseCreateView.as_view(), name='course-create'),
    path('', CourseListView.as_view(), name='course-list'),
    path('<int:pk>/', CourseDetailView.as_view(), name='course-detail'),
    path('enroll/', EnrollCourseView.as_view(), name='enroll-course'),
]

