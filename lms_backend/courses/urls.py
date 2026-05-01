from django.urls import path
from .views import CourseCreateView, CourseListView, CourseDetailView, EnrollCourseView, MyCoursesView, InstructorCoursesView, CourseUpdateDeleteView

urlpatterns = [
    path('create/', CourseCreateView.as_view(), name='course-create'),
    path('', CourseListView.as_view(), name='course-list'),
    path('<int:pk>/', CourseDetailView.as_view(), name='course-detail'),
    path('my-courses/', MyCoursesView.as_view(), name='my-courses'),
    path('enroll/', EnrollCourseView.as_view(), name='enroll-course'),
    path('instructor-courses/', InstructorCoursesView.as_view(), name='instructor-courses'),
    path('<int:pk>/edit/', CourseUpdateDeleteView.as_view(), name='course-update-delete'),
]

