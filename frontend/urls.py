from django.urls import path, re_path
from .views import *

urlpatterns = [
    path('robots.txt', robots_txt, name='robots_txt'),
    re_path(r'^(?!api)(?!media)(?!admin).*$', index, name='index'),
]