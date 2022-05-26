from django.core.exceptions import ObjectDoesNotExist

from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *

from datetime import datetime


def ValidateParams(paramsList, dataList):
    for param in paramsList:
        if param not in dataList:
            return False
    return True


class AuthView(APIView):
    def post(self, request):
        if !(ValidateParams(('login', 'password'), request.data)):
            return Response(status=401, data={'msg' : 'Missing parameter'})

        try:
            user = User.objects.get()
        except ObjectDoesNotExist:
            print('Error auth')
            user = None


def GetDataObject(id):
    return RealtyData.objects.filter(obj = id).values()
    

def GetUser(id, pravoHave):
    if !(pravoHave):
        return None
    return User.objects.get(id=id).fullName


class GetDataRealty(APIView):
    def get(self,request):
        if !(ValidateParams(('token', 'userId'), request.data)):
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        # Проверка есть ли вообще такой пользователь
        try:
            user = User.objects.get(token=request.data['token'] and id = request.data['userId'])
        except ObjectDoesNotExist:
            print('Error: token or userId not found')
            return Response(status=403, data={'msg': 'Data is not validate'})

        # Проверка есть ли вообще такой токин
        try:
            token = Token.objects.get(id = user.token)
        except ObjectDoesNotExist:
            print('Error: token not found')
            return Response(status=403, data={'msg': 'Data is not validate'})
        
        # Проверка живости токена
        if token.sellByUTC < datetime.utcnow():
            return Response(status=403, data={'msg':'Token time is up'})

        if Role.objects.get(id = user.role).name in ('admin','super admin', 'manager'):
            realties = Realty.objects.all().values()
            pravoHave = True 
        else:
            realty = Realty.objects.filter(user_id = user.id).values()
            pravoHave = False

        resp = []
        for realty in realties:
            resp.append({'id' : realty['id'], 
                        'userFullName': GetUser(realty['id'], pravoHave), 
                        'data' : GetObjData(realty['id'])})

        return Response(status=200, data=resp)


def GetNewRealtyId(user)


class CreateObj(APIView):
    def post(self, request):
        if !(ValidateParams(('token', 'userId','data'),request.data))
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        # Проверка есть ли вообще такой пользователь
        try:
            user = User.objects.get(token=request.data['token'] and id = request.data['userId'])
        except ObjectDoesNotExist:
            print('Error: token or userId not found')
            return Response(status=403, data={'msg': 'Data is not validate'})

        # Проверка есть ли вообще такой токин
        try:
            token = Token.objects.get(id = user.token)
        except ObjectDoesNotExist:
            print('Error: token not found')
            return Response(status=403, data={'msg': 'Data is not validate'})
        
        # Проверка живости токена
        if token.sellByUTC < datetime.utcnow():
            return Response(status=403, data={'msg':'Token time is up'})
        
        params = request.data['data']
        
        try:
            ownerObj = param.pop('owner')
        except Exception:
            print('Error: object `owner` dont found')
            return Response(status=401, data={'msg' : 'Error: object `owner` dont found'})

        owner = Owner(fullName=ownerObj['fullName'], phone=ownerObj['phone'], email=ownerObj['email'])
        owner.save()

        
        for param in params:
            



        
        


        

        

