from rest_framework.permissions import BasePermission

class IsInstructorOrAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user.role in ['instructor', 'admin']
    
class IsStudent(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'student'

class IsInstructorOwnerOrAdmin(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user.role == 'admin':
            return True
        return obj.instructor == request.user