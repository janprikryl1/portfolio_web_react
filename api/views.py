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
        new_message = Message(name=request.data.get('name'), email=request.data.get('email'),
                              subject=request.data.get('subject'), message=request.data.get('message'))
        new_message.save()
        return Response(status=status.HTTP_200_OK)


class LoadAll(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        webs = Project.objects.filter(category="w").reverse()
        webs_objects = []
        for i in webs:
            webs_objects.append({'title': i.name, 'url': i.icon.url, 'purpose': i.purpose, 'id':i.id})
        apps = Project.objects.filter(category="a").reverse()
        app_objects = []
        for i in apps:
            app_objects.append({'title': i.name, 'url': i.icon.url, 'purpose': i.purpose, 'id':i.id})
        others = Project.objects.all().exclude(category="w").exclude(category="a").reverse()
        others_objects = []
        for i in others:
            others_objects.append({'title': i.name, 'url': i.icon.url, 'purpose': i.purpose, 'id':i.id})
        return Response({'webs': webs_objects, 'apps': app_objects, 'others': others_objects},
                        status=status.HTTP_200_OK)

class LoadDetails(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        project = Project.objects.get(id=request.data.get('id'))
        screenshots = []
        for i in project.screenshots.all():
            screenshots.append({'description':i.description, 'original':i.image.url})
        return Response({'name':project.name, 'description':project.description, 'repository':project.repository, 'purpose':project.purpose, 'screenshots':screenshots}, status=status.HTTP_200_OK)