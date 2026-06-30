from rest_framework import serializers
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'full_name', 
            'username', 
            'email', 
            'password', 
            'role', 
            'mobile_number', 
            'whatsapp_number']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)   # 🔥 IMPORTANT
        user.save()
        return user

class LoginSerializer(serializers.Serializer):
    username_or_email = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        username_or_email = attrs.get("username_or_email")
        password = attrs.get("password")

        try:
            user = User.objects.get(email=username_or_email)
            username = user.username
        except User.DoesNotExist:
            username = username_or_email

        user = authenticate(
            username=username,
            password=password
        )

        if not user:
            raise serializers.ValidationError(
                "Invalid username/email or password"
            )

        refresh = RefreshToken.for_user(user)

        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "role": user.role,
            "username": user.username,
            "email": user.email,
        }
    



# For Admin to view Instructor details along with the count of courses they have created
class AdminInstructorSerializer(serializers.ModelSerializer):

    courses_count = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "courses_count",
        ]

    def get_courses_count(self, obj):
        return obj.course_set.count()