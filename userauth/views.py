# from django.shortcuts import render
from rest_framework import generics
from .models import User
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

# View for user registration
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()  # Query all users
    serializer_class = UserSerializer  # Use UserSerializer for validation and creation
    permission_classes = [AllowAny]  # Allow all users (no authentication needed)

class UserDetailView(APIView):
    # Require the user to be authenticated
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get(self, request, *args, **kwargs):
        # Serialize the authenticated user’s data and return it
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)