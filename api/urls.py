from django.urls import path
from .views import *

urlpatterns = [
    path('save_message', SaveMessage.as_view(), name='save_message'),
    path('load_all', LoadAll.as_view(), name='load_all'),
    path('load_details', LoadDetails.as_view(), name='load_details')
]