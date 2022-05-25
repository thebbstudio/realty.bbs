from turtle import title
from django.db import models


class Role(models.Model):
    title = models.CharField(max_length=25)

class User(models.Model):
    login = models.CharField(max_length=50)
    

class Owner(models.Model):
    pass

class ObjectData(models.Model):
    pass

class ImageObject(models.Model):
    pass

class FormField(models.Model):
    pass

class DropDownValue(models.Model):
    pass