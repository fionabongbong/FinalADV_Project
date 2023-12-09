from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include([
        path('albums/', include('albums.urls')),
        path('users/', include('users.urls')),
    ])),
]
