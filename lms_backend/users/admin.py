from django.contrib import admin
from django.contrib.auth.models import User as DefaultUser
from django.contrib.auth.admin import UserAdmin
from .models import User

# Unregister default User
admin.site.unregister(DefaultUser)

# Register custom User
class CustomUserAdmin(UserAdmin):
    model = User

    list_display = ('username', 'email', 'role', 'first_name', 'last_name', 'is_staff')
    list_filter = ('role', 'is_staff')
    search_fields = ('username', 'email')

    fieldsets = UserAdmin.fieldsets + (
        ("Role Info", {"fields": ("role",)}),
    )

    add_fieldsets = UserAdmin.add_fieldsets + (
        ("Role Info", {"fields": ("role",)}),
    )

admin.site.register(User, CustomUserAdmin)