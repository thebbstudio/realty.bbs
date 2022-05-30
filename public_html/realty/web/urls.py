from django.shortcuts import render
from .views import *
from django.urls import path, include


urlpatterns = [
    path('', ReactView),
    path('table/', ReactView)
]