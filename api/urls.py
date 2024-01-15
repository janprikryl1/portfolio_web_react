from django.urls import path
from .views import *

urlpatterns = [
    path('save_message', SaveMessage.as_view(), name='save_message'),
]