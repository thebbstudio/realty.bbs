import email
from django.db import models
from datetime import datetime
from django.utils import timezone

class Role(models.Model):
    name = models.CharField(max_length=25)

class Token(models.Model):
    token = models.CharField(max_length=255)
    isActive = models.BooleanField(default=True)
    sellByUTC = models.DateTimeField(auto_now=True)
    class Meta:
        ordering = ['-sellByUTC','-isActive']


class User(models.Model):
    fullName = models.CharField(max_length=255)

    login = models.CharField(max_length=50)
    password = models.CharField(max_length=20)
    
    isActive = models.BooleanField(default=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    token = models.ForeignKey(Token, on_delete=models.CASCADE, default='')
    class Meta:
        ordering = ['fullName']

class Owner(models.Model):
    fullName = models.CharField(max_length=255)
    phone = models.CharField(max_length=12)
    email = models.CharField(max_length=50, default='', null=True)


class Realty(models.Model):
    owner = models.ForeignKey(Owner, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    typeRealty = models.CharField(max_length=20, default='Квартира')
    

class RealtyData(models.Model):
    realty = models.ForeignKey(Realty, on_delete=models.CASCADE)
    name = models.CharField(max_length=25)
    value = models.CharField(max_length=200)


class ImageRealty(models.Model):
    realty = models.ForeignKey(Realty, on_delete=models.CASCADE)
    path = models.ImageField(upload_to = 'objects/% Y/% m/% d/', default=None, blank=True)