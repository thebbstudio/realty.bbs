from ..models import *
from django.core.exceptions import ObjectDoesNotExist
import requests
from snippets.serializers import SnippetSerializer
from django.core.signing import Signer

from rest_framework.response import Response
from rest_framework.views import APIView

from django.http import Http404
from rest_framework import status
from datetime import datetime


def ValidateParams(paramsList, dataList):
    for param in paramsList:
        if param not in dataList:
            print(param)
            return False
    return True


def GetDataObject(id):
    return RealtyData.objects.filter(obj = id).values()

  
def GetUser(id, pravoHave):
    if not pravoHave:
        return None
    return User.objects.get(id=id).fullName


def GetObjData(realtyId):
    resp = []
    resp.extend(RealtyData.objects.filter(realty_id=realtyId).values('id', 'name', 'value'))
    realty = Realty.objects.get(id=realtyId)
    owner = Owner.objects.get(id = realty.owner_id)
    resp.append({'id' : realtyId, 'name' : 'typeRealty' , 'value' : realty.typeRealty })
    resp.append({'id' : owner.id, 'name' : 'ownerFullName' , 'value' : owner.fullName })
    resp.append({'id' : owner.id, 'name' : 'ownerPhone' , 'value' : owner.phone })
    resp.append({'id' : owner.id, 'name' : 'ownerEmail' , 'value' : owner.email })

    return resp


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