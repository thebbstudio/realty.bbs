import email
from django.db import models
from datetime import datetime


class Role(models.Model):
    name = models.CharField(max_length=25)

class Token(models.Model):
    token = models.CharField(max_length=50)
    isActive = models.BooleanField(default=True)
    sellByUTC = models.DateTimeField(defalt=datetime.utcnow())


class User(models.Model):
    fullName = models.CharField(max_length=255)

    login = models.CharField(max_length=50)
    password = models.CharField(max_length=20)
    
    isActive = models.BooleanField(default=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    token = models.ForeignKey(Token, on_delete=models.CASCADE)


class Owner(models.Model):
    fullName = models.CharField(max_length=255)
    phone = models.CharField(max_length=12)
    email = models.CharField(max_length=50)


class Realty(models.Model):
    owner = models.ForeignKey(Owner, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    

class RealtyData(models.Model):
    obj = models.ForeignKey(Realty, on_delete=models.CASCADE)
    name = models.CharField(max_length=25)
    value = models.CharField(max_length=200)


class ImageObject(models.Model):
    realty = models.ForeignKey(Realty, on_delete=models.CASCADE)
    path = models.ImageField(upload_to = 'objects/% Y/% m/% d/', default=None, blank=True)