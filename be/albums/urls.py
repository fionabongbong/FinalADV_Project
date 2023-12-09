from django.urls import path
from .views import AlbumView

# http://127.0.0.1:8000/api/albums/:id

urlpatterns = [
    path('', AlbumView.as_view({
        'get': 'list',
        'post': 'create',
    })),
    path('<int:id>/', AlbumView.as_view({
        'put': 'update',
        'delete': 'destroy'
    }))
]
