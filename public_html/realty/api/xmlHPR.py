from xml.dom import minidom
import os

from .models import *


def CreateXmlFeedCian(userId):
    realties = [] 

    for realty in Realty.objects.all().values():
        realtyData = RealtyData.objects.filter(obj_id = realty['id']).values()
        realtyData.update({realty})    
        realties.append()
