# userauth/urls.py
from django.urls import path
from userauth.views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path("register/", CreateUserView.as_view(), name="register"),
    path("details/", UserDetailView.as_view(), name="user_details"),
    path("token/", TokenObtainPairView.as_view(), name="get_token"),
    path("token/refresh/", TokenRefreshView.as_view(), name="refresh"),
]
