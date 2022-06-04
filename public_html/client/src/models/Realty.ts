import { Data } from '../HomePage/TableRealty';

export type InfoAboutField = {
  id: number,
  label: string,
  name: string,
  value: string | number | undefined
}

interface IRealty {
  realtyId: number

  // info about type realty
  typeRealty: InfoAboutField

  // // info about owner
  ownerFullName: InfoAboutField
  ownerPhone: InfoAboutField
  ownerEmail?: InfoAboutField

  // info about location
  location: InfoAboutField
  populationCenter: InfoAboutField
  district?: InfoAboutField
  street: InfoAboutField
  numberHouse: InfoAboutField
  numberCase?: InfoAboutField
  numberApartment?: InfoAboutField
  metro?: InfoAboutField
  toMetro?: InfoAboutField
  valueToMetro?: InfoAboutField

  // info about params
  costRub: InfoAboutField
  rooms: InfoAboutField
  heightCeiling?: InfoAboutField
  areaTotal: InfoAboutField
  areaKitchen?: InfoAboutField
  maxFloor: InfoAboutField
  typeHouse: InfoAboutField
  isNewHouse?: InfoAboutField
  yearConstruction?: InfoAboutField
  repair: InfoAboutField
  heating: InfoAboutField
  furniture?: InfoAboutField
  photos: InfoAboutField
}

class Realty implements IRealty {
  realtyId;
  typeRealty;
  ownerFullName;
  ownerPhone;
  ownerEmail;
  // уточнил тип переменной, так как по дефолту присваивается тип Location
  location: InfoAboutField;
  populationCenter;
  district;
  street;
  numberHouse;
  numberCase;
  numberApartment;
  metro;
  toMetro;
  valueToMetro;
  costRub;
  rooms;
  heightCeiling;
  areaTotal;
  areaKitchen;
  maxFloor;
  typeHouse;
  isNewHouse;
  yearConstruction;
  repair;
  heating;
  furniture;
  photos;

  constructor(realtyId: number, data: Data[]) {
    this.realtyId = realtyId;
    this.typeRealty = {
      label: 'Тип недвижимости',
      ...data.filter((el) => el.name === 'typeRealty')[0],
    };
    this.ownerPhone = {
      label: 'Телефон собственника',
      ...data.filter((el) => el.name === 'ownerPhone')[0],
    };
    this.ownerFullName = {
      label: 'ФИО собственника',
      ...data.filter((el) => el.name === 'ownerFullName')[0],
    };
    this.ownerEmail = {
      label: 'Емаил собственника',
      ...data.filter((el) => el.name === 'ownerEmail')[0],
    };
    this.location = {
      label: 'Расположение',
      ...data.filter((el) => el.name === 'location')[0],
    };
    this.populationCenter = {
      label: 'Населенный пункт',
      ...data.filter((el) => el.name === 'populationCenter')[0],
    };
    this.district = {
      label: 'Район',
      ...data.filter((el) => el.name === 'district')[0],
    };
    this.street = {
      label: 'Улица',
      ...data.filter((el) => el.name === 'street')[0],
    };
    this.numberHouse = {
      label: 'Номер дома',
      ...data.filter((el) => el.name === 'numberHouse')[0],
    };
    this.numberCase = {
      label: 'Номер корпуса',
      ...data.filter((el) => el.name === 'numberCase')[0],
    };
    this.numberApartment = {
      label: 'Номер квартиры',
      ...data.filter((el) => el.name === 'numberApartment')[0],
    };
    this.metro = {
      label: 'Метро',
      ...data.filter((el) => el.name === 'metro')[0],
    };
    this.toMetro = {
      label: 'До метро',
      ...data.filter((el) => el.name === 'toMetro')[0],
    };
    this.valueToMetro = {
      label: 'Величина до метро',
      ...data.filter((el) => el.name === 'valueToMetro')[0],
    };
    this.costRub = {
      label: 'Цена',
      ...data.filter((el) => el.name === 'costRub')[0],
    };
    this.rooms = {
      label: 'Количество комнат',
      ...data.filter((el) => el.name === 'rooms')[0],
    };
    this.heightCeiling = {
      label: 'Высота потолка',
      ...data.filter((el) => el.name === 'heightCeiling')[0],
    };
    this.areaTotal = {
      label: 'Площадь общая',
      ...data.filter((el) => el.name === 'areaTotal')[0],
    };
    this.areaKitchen = {
      label: 'Площадь кухни',
      ...data.filter((el) => el.name === 'areaKitchen')[0],
    };
    this.maxFloor = {
      label: 'Этажей в доме',
      ...data.filter((el) => el.name === 'maxFloor')[0],
    };
    this.typeHouse = {
      label: 'Тип дома',
      ...data.filter((el) => el.name === 'typeHouse')[0],
    };
    this.isNewHouse = {
      label: 'Новый дом',
      ...data.filter((el) => el.name === 'isNewHouse')[0],
    };
    this.yearConstruction = {
      label: 'Год постройки',
      ...data.filter((el) => el.name === 'yearConstruction')[0],
    };
    this.repair = {
      label: 'Ремонт',
      ...data.filter((el) => el.name === 'repair')[0],
    };
    this.heating = {
      label: 'Отопление',
      ...data.filter((el) => el.name === 'heating')[0],
    };
    this.furniture = {
      label: 'Мебель',
      ...data.filter((el) => el.name === 'furniture')[0],
    };
    this.photos = {
      label: 'Фотографии',
      ...data.filter((el) => el.name === 'photos')[0],
    };
  }
}

export default Realty;
