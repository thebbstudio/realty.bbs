import { Data } from '../HomePage/TableRealty';
import Realty, { InfoAboutField } from './Realty';

class House extends Realty {
  areaLiving!: InfoAboutField;
  areaRooms!: InfoAboutField;
  areaLand!: InfoAboutField;
  typeBuild: InfoAboutField;
  legalStatusLand: InfoAboutField;
  categoryLand: InfoAboutField;
  sewerage: InfoAboutField;
  water: InfoAboutField;
  electricity: InfoAboutField;
  gas: InfoAboutField;
  sauna: InfoAboutField;

  constructor(realtyId: number, data: Data[]) {
    super(realtyId, data);
    this.areaLiving = {
      label: 'Площадь жилая',
      ...data.filter((el) => el.name === 'areaLiving')[0],
    };
    this.areaLand = {
      label: 'Площадь жилая',
      ...data.filter((el) => el.name === 'areaLand')[0],
    };
    this.areaRooms = {
      label: 'Площадь комнаты',
      ...data.filter((el) => el.name === 'areaRooms')[0],
    };
    this.typeBuild = {
      label: 'Тип объекта',
      ...data.filter((el) => el.name === 'typeBuild')[0],
    };
    this.legalStatusLand = {
      label: 'Юридический статус земли',
      ...data.filter((el) => el.name === 'legalStatusLand')[0],
    };
    this.categoryLand = {
      label: 'Категория земли',
      ...data.filter((el) => el.name === 'categoryLand')[0],
    };
    this.sewerage = {
      label: 'Канализация',
      ...data.filter((el) => el.name === 'sewerage')[0],
    };
    this.water = {
      label: 'Вода',
      ...data.filter((el) => el.name === 'water')[0],
    };
    this.electricity = {
      label: 'Электричество',
      ...data.filter((el) => el.name === 'electricity')[0],
    };
    this.gas = {
      label: 'Газ',
      ...data.filter((el) => el.name === 'gas')[0],
    };
    this.sauna = {
      label: 'Сауна / Баня',
      ...data.filter((el) => el.name === 'sauna')[0],
    };
  }
}

export default House;
