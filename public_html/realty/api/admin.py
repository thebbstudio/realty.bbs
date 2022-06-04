from django.contrib import admin
from .models import *


@admin.register(Owner)
class OwnerAdmin(admin.ModelAdmin):
    list_display = ('id', 'fullName', 'phone', 'email')
    list_display_links = ('fullName',)


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'fullName', 'role', 'isActive')
    list_display_links = ('fullName',)

    def save_model(self, request, obj, form, change):
        print(request.user)
        print(obj.User)
        super().save_model(request, obj, form, change)
