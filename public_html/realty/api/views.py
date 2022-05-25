from django.core.exceptions import ObjectDoesNotExist

from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *


def ValidateParams(paramsList, dataList):
    for param in paramsList:
        if param not in dataList:
            return Response(status=400, data={'msg' : 'Missing parameter'})

class AuthView(APIView):
    def post(self, request):
        ValidateParams(('login', 'password'), request.data)
        try:
            user = User.objects.get()
        except ObjectDoesNotExist:
            print('Error auth')
            user = None

