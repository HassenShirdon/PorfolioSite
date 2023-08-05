from .views import contact
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('', views.contact, name='contact'),
]
