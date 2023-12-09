from django.urls import path
from .views import LoginView, AuthView

urlpatterns = [
    path('login/', LoginView.as_view({
        'post': 'login',
    })),
    path('auth/', AuthView.as_view({
        'get': 'auth',
    })),
]
