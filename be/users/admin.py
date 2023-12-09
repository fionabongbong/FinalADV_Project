from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ('id', 'email', 'first_name', 'last_name',)
    ordering = ('email', )

    fieldsets = [
        ("Account", {
                "classes": ["wide"],
                "fields": ["email", "password"],
        }),
        ("Basic Information", {
                "classes": ["wide"],
                "fields": ["first_name", "last_name"],
        }),
        ("Account Status", {
                "classes": ["wide"],
                "fields": ["is_active", "is_staff", "is_superuser"],
        }),
    ]

    add_fieldsets = [
        ("Account", {
                "classes": ["wide"],
                "fields": ["email", "password1", "password2"],
        }),
        ("Basic Information", {
                "classes": ["wide"],
                "fields": ["first_name", "last_name"],
        }),
        ("Account Status", {
                "classes": ["wide"],
                "fields": ["is_active", "is_staff", "is_superuser"],
        }),
    ]