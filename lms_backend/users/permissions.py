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
    
# class IsAdminUserRole(BasePermission):

#     def has_permission(self, request, view):
#         return (
#             request.user.is_authenticated and
#             request.user.role == "admin"
#         )
    

class IsAdminUserRole(BasePermission):

    def has_permission(self, request, view):

        print("Permission Check")
        print("Authenticated:", request.user.is_authenticated)
        print("Role:", getattr(request.user, "role", None))

        return (
            request.user.is_authenticated
            and getattr(request.user, "role", None) == "admin"
        )


