from rest_framework.viewsets import ModelViewSet, GenericViewSet
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.status import HTTP_401_UNAUTHORIZED
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer

class LoginView(GenericViewSet):

    def login(self, request, *args, **kwargs):
        user = authenticate(
            email=request.data.get('email'),
            password=request.data.get('password'),
        )
        if user is not None:
            return Response({ 'token': Token.objects.get(user=user).key })
        else:
            return Response({ 
                'error': 'Incorrect email/password' }, 
                status=HTTP_401_UNAUTHORIZED)
        

class AuthView(ModelViewSet):
    serializer_class = UserSerializer

    def auth(self, request, *args, **kwargs):
        serializer = self.get_serializer(request.user)   
        return Response(serializer.data)

