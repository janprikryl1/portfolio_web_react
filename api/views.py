from django.shortcuts import render
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Message, Screenshot, Project

# Create your views here.
class SaveMessage(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format=None):
        new_message = Message(name=request.data.get('name'), email=request.data.get('email'), subject=request.data.get('subject'), message=request.data.get('message'))
        new_message.save()
        return Response(status=status.HTTP_200_OK)