from django.core.exceptions import ObjectDoesNotExist
import requests
from snippets.serializers import SnippetSerializer
from django.core.signing import Signer

from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *

from django.http import Http404
from rest_framework import status
from datetime import datetime


def ValidateParams(paramsList, dataList):
    for param in paramsList:
        if param not in dataList:
            print(param)
            return False
    return True



class CreateUser(APIView):
    def post(self, request):
        signer = Signer()

        login = request.data['login']
        password = signer.sign(request.data['password'])
        role = Role.objects.get(name=request.data['roleName']) 
        time = timezone.now()
        tokenStr = signer.sign(str(time))
        token = Token(token=tokenStr)   
        token.save()

        user = User(fullName=request.data['fullName'], login=login, password=password, role_id=role.id, token_id=token.id)
        user.save()

        return Response({'token':token.token,'userId':user.id})

class AuthView(APIView):
    def post(self, request):
        
        data = {}
        print(request.data)
        for key, value in request.data['params'].items():
            data.update({key : value})
        print(data)
        if not ValidateParams(('login', 'password'), data):
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        signer = Signer()

        login = data['login']
        password = signer.sign(data['password'])

        try:
            user = User.objects.filter(login=login,password=password,isActive=True).values()[:1][0]
        except ObjectDoesNotExist:
            print('Error auth')
            return Response(status=403, data={'msg': 'User not found'})
        

        # Проверка есть ли вообще такой токин
        try:
            token = Token.objects.get(id = user['token_id'], isActive=True)
        except ObjectDoesNotExist:
            print('Error: token not found')
            time = timezone.now()
            tokenStr = signer.sign(str(time))
            token = Token(token=tokenStr)   
            token.save()
            return Response({'token':token.token,'userId' : user['id']})
        
        # ИСПРАВИТЬ ЭТО ГОВНО
        # Проверка живости токена
        if token.sellByUTC > timezone.now():
            return Response(status=403, data={'msg':'Token time is up'})
        
        return Response({'token':token.token, 'userId' : user['id']})

class CheckTokenView(APIView):
    def get(self, request):
        data = {}
        
        data['token'] = request.GET['token']
        data['userId'] = request.GET['userId']

        if not ValidateParams(('token', 'userId'), data):
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        # Проверка есть ли вообще такой пользователь
        try:
            user = User.objects.filter(id = data['userId']).values()[:1][0]
        except ObjectDoesNotExist:
            print('Error: token or userId not found')
            return Response(status=403, data={'msg': 'Data is not validate'})

        # Проверка есть ли вообще такой токин
        try:
            token = Token.objects.get(token=data.pop('token'), id = user['token_id'], isActive=True)
        except ObjectDoesNotExist:
            print('Error: token not found')
            return Response(status=403, data={'msg': 'Data is not validate'})
        
        # Проверка живости токена
        if token.sellByUTC > timezone.now():
            print('Token time is up')
            return Response(status=403, data={'msg':'Token time is up'})

        return Response(status=200, data={'msg': 'All good'})
        
        

def GetDataObject(id):
    return RealtyData.objects.filter(obj = id).values()
    
def GetUser(id, pravoHave):
    if not pravoHave:
        return None
    return User.objects.get(id=id).fullName

def GetObjData(realtyId):
    
    return RealtyData.objects.filter(obj=realtyId).values('id', 'name', 'value')

# TODO:
# Были данные о собственнике

class GetDataRealty(APIView):
    def get(self,request):
        data = {}

        for key, value in request.GET.items():
            data.update({key : value})

        if not ValidateParams(('token', 'userId', 'typeRealty'), data):
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        # Проверка есть ли вообще такой пользователь
        try:
            user = User.objects.filter(id = data['userId']).values()[:1][0]
        except ObjectDoesNotExist:
            print('Error: token or userId not found')
            return Response(status=403, data={'msg': 'Data is not validate'})

        # Проверка есть ли вообще такой токин
        try:
            token = Token.objects.get(token=data.pop('token'), id = user['token_id'], isActive=True)
        except ObjectDoesNotExist:
            print('Error: token not found')
            return Response(status=403, data={'msg': 'Data is not validate'})
        
        # Проверка живости токена
        if token.sellByUTC > timezone.now():
            return Response(status=403, data={'msg':'Token time is up'})

        if Role.objects.get(id = user['role_id']).name in ('admin','super admin', 'manager'):
            realties = Realty.objects.filter(typeRealty = data['typeRealty']).values()
            pravoHave = True 
        else:
            realties = Realty.objects.filter(user_id = user.id, typeRealty = data['typeRealty']).values()
            pravoHave = False

        resp = []
        print(realties)
        for realty in realties:
            print(realty)
            resp.append({'id' : realty['id'], 
                        'userFullName': None, 
                        'data' : GetObjData(realty['id']).extend(Owner.objects.filter(id=realty['owner_id']).values())})

        return Response(status=200, data=resp)

# TODO:
# Записывать данные собвстенникак в таблицу собственника

class CreateRealty(APIView):
    def post(self, request):
        
        data = {}

        for key, value in request.data['params'].items():
            data.update({key : value})
            
        if not ValidateParams(('token', 'userId','fullNameOwner', 'phoneOwner'), data):
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        # Проверка есть ли вообще такой пользователь
        try:
            user = User.objects.filter(id = data['userId']).values()[:1][0]
        except ObjectDoesNotExist:
            print('Error: token or userId not found')
            return Response(status=403, data={'msg': 'Data is not validate'})

        # Проверка есть ли вообще такой токин
        try:
            token = Token.objects.get(token=data.pop('token'), id = user['token_id'], isActive=True)
        except ObjectDoesNotExist:
            print('Error: token not found')
            return Response(status=403, data={'msg': 'Data is not validate'})
        
        # Проверка живости токена
        if token.sellByUTC > timezone.now():
            return Response(status=403, data={'msg':'Token time is up'})
        
        
        try:
            fullName = data.pop('fullNameOwner')
            phone = data.pop('phoneOwner')
            email = ''
            if 'email' in data.keys():
                email = data.pop('email')
        except Exception:
            print(data)
            print('Error: object `owner` dont found')
            return Response(status=401, data={'msg' : 'Error: data `owner` dont found'})

        owner = Owner(fullName=fullName, phone=phone, email=email)
        owner.save()

        realty = Realty(owner_id=owner.id, user_id=user['id'])
        realty.save()
        # ПИЗДЕЦ БЛЯТЬ ФОТО ХУЁВО СОХРАНИТ
        for key, value in data.items():
            RealtyData(obj_id=realty.id, name=key, value=value).save()

        return Response(status=200, data={'msg': 'Write realty done.'})


class DeleteRealty(APIView):
    def delete(self, request):
        if not ValidateParams(('token', 'userId', 'realtyId'),request.data):
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        # Проверка есть ли вообще такой пользователь
        try:
            user = User.objects.get( id = request.data['userId'])
        except ObjectDoesNotExist:
            print('Error: token or userId not found')
            return Response(status=403, data={'msg': 'Data is not validate'})

        # Проверка есть ли вообще такой токин
        try:
            token = Token.objects.get(token=request.data.pop('token'),id = user.token)
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
        data = {}

        for key, value in request.GET.items():
            data.update({key : value})

        if not ValidateParams(('token', 'userId', 'realtyId'), data):
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        # Проверка есть ли вообще такой пользователь
        try:
            user = User.objects.filter(id = data['userId']).values()[:1][0]
        except ObjectDoesNotExist:
            print('Error: token or userId not found')
            return Response(status=403, data={'msg': 'Data is not validate'})

        # Проверка есть ли вообще такой токин
        try:
            token = Token.objects.get(token=data.pop('token'), id = user['token_id'], isActive=True)
        except ObjectDoesNotExist:
            print('Error: token not found')
            return Response(status=403, data={'msg': 'Data is not validate'})
        
        # Проверка живости токена
        if token.sellByUTC > timezone.now():
            return Response(status=403, data={'msg':'Token time is up'})
        print(data)
        return Response(status=200, data=RealtyData.objects.filter(obj_id=data['realtyId']).values())

class PutRealty(APIView):
    def put(self, request):
        if not ValidateParams(('token', 'userId', 'realtyId'), request.data):
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        # Проверка есть ли вообще такой пользователь
        try:
            user = User.objects.get(id = request.data['userId'])
        except ObjectDoesNotExist:
            print('Error: token or userId not found')
            return Response(status=403, data={'msg': 'Data is not validate'})

        # Проверка есть ли вообще такой токин
        try:
            token = Token.objects.get(token=request.data.pop('token'), id = user.token)
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
        if not ValidateParams(('token', 'userId', 'field', 'value'), request.data):
            return Response(status=401, data={'msg' : 'Missing parameter'})
        
        # Проверка есть ли вообще такой пользователь
        try:
            user = User.objects.get(id = request.data['userId'])
        except ObjectDoesNotExist:
            print('Error: token or userId not found')
            return Response(status=403, data={'msg': 'Data is not validate'})

        # Проверка есть ли вообще такой токин
        try:
            token = Token.objects.get(token=request.data.pop('token'), id = user.token)
        except ObjectDoesNotExist:
            print('Error: token not found')
            return Response(status=403, data={'msg': 'Data is not validate'})
        
        # Проверка живости токена
        if token.sellByUTC < datetime.utcnow():
            return Response(status=403, data={'msg':'Token time is up'})
        
        if request.data['field'] in ('phoneOwner', 'emailOwner', 'fullNameOwner'):
            return Response(data=PropertyOwner(request.data['field'], request.data['userId']))
        else:
            return Response(data={'msg': 'Dont have this field ' + str(request.data['field'])},status=status.HTTP_400_BAD_REQUEST)




        


        
        

            



        
        


        

        

