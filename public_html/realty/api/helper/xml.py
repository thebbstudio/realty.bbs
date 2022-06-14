import os
import xml.etree.ElementTree as el
from ..models import *
from realty.settings import MEDIA_ROOT

def createFeed():
    # Массив словарей
    data = Realty.objects.filter(isactive=1).values()

    root = el.Element("Feed") 

    feedVersion = el.Element("feed_version")
    feedVersion.text = str(2)

    root.append(feedVersion)

    for realty in data: 
        if data['typeRealty'] == 'Квартира':
            xml = getDataFlat(realty['id'])
        elif data['typeRealty'] == 'Комната':
            xml = getDataRoom(realty['id'])
        elif data['typeRealty'] == 'Дом':
            xml = getDataCountryEstate(realty['id'])
        root.append(xml)

    tree = el.ElementTree(root) 

    with open (os.path.join(MEDIA_ROOT, 'cian.xml'), "wb") as files : 
        tree.write(files) 


def getDataFlat(realtyId):
    dataRealty = RealtyData.objects.filter(realty_id = realtyId).values()
    data = {}

    for item in dataRealty:
        data[item['name']] = item['value']

    xml = el.Element('object')
    
    category = el.SubElement(xml, 'Category')
    category.text = 'flatSale'

    numRooms = el.SubElement(xml, 'FlatRoomsCount')
    if data['rooms'] == 'Студия':
        numRooms.text = 9
    elif int(data['rooms']) > 5:
        numRooms.text = 6
    else:
        numRooms.text = int(data['rooms'])

    totalArea = el.SubElement(xml, 'TotalArea')
    totalArea.text = data['areaTotal']

    floorNumber = el.SubElement('FloorNumber')
    floorNumber.text = data['floor']

    building = el.SubElement(xml, 'Building')
    floorsCount = el.SubElement(building, 'FloorsCount')
    floorsCount.text = data['maxFloor']

    bargainTerms = el.SubElement(xml, 'BargainTerms')
    price = el.SubElement(bargainTerms, 'Price')
    price.text = data['costRub']
    saleType = el.SubElement(bargainTerms, 'SaleType')
    saleType.text = 'free'

    return xml

def getDataRoom():
    pass


def getDataCountryEstate():
    pass
