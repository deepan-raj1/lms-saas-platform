from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class User(AbstractUser):

    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('instructor', 'Instructor'),
        ('student', 'Student'),
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='student',
        db_index=True,
    )

    full_name = models.CharField(
        max_length=100,
        blank=True
    )

    mobile_number = models.CharField(
        max_length=20,
        blank=True
    )

    whatsapp_number = models.CharField(
        max_length=20,
        blank=True
    )

    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_set',
        blank=True,
    )

    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_permissions_set',
        blank=True,
    )

    def __str__(self):
        return self.username
    