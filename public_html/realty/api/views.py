from django.core.exceptions import ObjectDoesNotExist
from snippets.serializers import SnippetSerializer

from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *

from django.http import Http404
from rest_framework import status

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

        if Role.objects.get(id = user.role_id).name in ('admin','super admin', 'manager'):
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


class CreateRealty(APIView):
    def post(self, request):
        if !(ValidateParams(('token', 'userId','fullNameOwner', 'phoneOwner', 'emailOwner'),request.data))
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        # Проверка есть ли вообще такой пользователь
        try:
            user = User.objects.get(token=request.data.pop('token') and id = request.data.pop('userId'))
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
        
        params = request.data
        
        try:
            fullName = param.pop('fullName')
            phone = param.pop('phone')
            email = param.pop('email')
        except Exception:
            print('Error: object `owner` dont found')
            return Response(status=401, data={'msg' : 'Error: data `owner` dont found'})

        owner = Owner(fullName=fullName, phone=phone, email=email)
        owner.save()

        realty = Realty(owner=owner.id, user=user.id)
        realty.save()

        for key, value in params.items():
            RealtyData(id=realty.id, name=key, value=value).save()

        return Response(status=200, data={'msg': 'Write realty done.'})

class DeleteRealty(APIView):
    def delete(self, request):
        if !(ValidateParams(('token', 'userId', 'realtyId'),request.data))
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        # Проверка есть ли вообще такой пользователь
        try:
            user = User.objects.get(token=request.data.pop('token') and id = request.data['userId'])
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
        
        
        if (Role.objects.get(id=user.role_id).name in ('admin','super admin', 'manager') or user.id == request.data['userId']):
            Realty.objects.get(id=request.data['realtyId']).delete()
            return Response(status=200, data={'msg':'Realty deleted'})
        else:
            return Response(status=403, data={'msg':'Fuck u lather man'})

class GetDataOneRealty(APIView):
    def get(self, request):
        if !(ValidateParams(('token', 'userId', 'realtyId'),request.data))
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        # Проверка есть ли вообще такой пользователь
        try:
            user = User.objects.get(token=request.data.pop('token') and id = request.data['userId'])
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
        

        return Response(status=200, data=RealtyData.objects.filter(obj_id=request.data['realtyId']).values())


class PutRealty(APIView):
    def put(self, request):
        if !(ValidateParams(('token', 'userId', 'realtyId'), request.data))
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        # Проверка есть ли вообще такой пользователь
        try:
            user = User.objects.get(token=request.data.pop('token') and id = request.data['userId'])
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


        realty = RealtyData.objects.get(obj_id=request.dat.pop('realtyId'))
        serializer = SnippetSerializer(realty, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Realty updated'})
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def PropertyOwner(field, userId):
    resp = []
    for realty in Realty.objects.filter(user_id=userId).values():
        owner = Owner.objects.get(id=realty['owner_id'])
        if field == 'phoneOwner':
            resp.append(owner.phone)
        elif field == 'emailOwner':
            resp.append(owner.email)
        elif field == 'fullNameOwner':
            resp.append(owner.fullName)    
    return resp


class GetPropertyOwner(APIView):
    def get(self, request):
        if !(ValidateParams(('token', 'userId', 'field', 'value'), request.data))
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        # Проверка есть ли вообще такой пользователь
        try:
            user = User.objects.get(token=request.data.pop('token') and id = request.data['userId'])
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
        
        if request.data['field'] in ('phoneOwner', 'emailOwner', 'fullNameOwner'):
            return Response(data=PropertyOwner(request.data['field'], request.data['userId']))
        else:
            return Response(data={'msg':f'Dont have this field {request.data['field']}'},status=status.HTTP_400_BAD_REQUEST))




        


        
        

            



        
        


        

        

