import { Data } from '../HomePage/TableRealty';
import Realty, { InfoAboutField } from './Realty';

class Flat extends Realty {
  typeFlat: InfoAboutField;
  layout: InfoAboutField;
  areaLiving: InfoAboutField;
  areaRooms: InfoAboutField;
  floor: InfoAboutField;
  elevator!: InfoAboutField;
  majorRepairs!: InfoAboutField;
  viewWindows!: InfoAboutField;
  balcony: InfoAboutField;
  bath!: InfoAboutField;
  bathroom: InfoAboutField;
  waterSupply: InfoAboutField;

  constructor(realtyId: number, data: Data[]) {
    super(realtyId, data);
    this.typeFlat = {
      label: 'Тип квартиры',
      ...data.filter((el) => el.name === 'typeFlat')[0],
    };
    this.layout = {
      label: 'Планировка',
      ...data.filter((el) => el.name === 'layout')[0],
    };
    this.areaLiving = {
      label: 'Площадь жилая',
      ...data.filter((el) => el.name === 'areaLiving')[0],
    };
    this.areaRooms = {
      label: 'Площадь комнат',
      ...data.filter((el) => el.name === 'areaRooms')[0],
    };
    this.floor = {
      label: 'Этаж',
      ...data.filter((el) => el.name === 'floor')[0],
    };
    this.elevator = {
      label: 'Лифт',
      ...data.filter((el) => el.name === 'elevator')[0],
    };
    this.majorRepairs = {
      label: 'Капительный ремонт',
      ...data.filter((el) => el.name === 'majorRepairs')[0],
    };
    this.viewWindows = {
      label: 'Вид из окон',
      ...data.filter((el) => el.name === 'viewWindows')[0],
    };
    this.balcony = {
      label: 'Балкон / Лоджия',
      ...data.filter((el) => el.name === 'balcony')[0],
    };
    this.bath = {
      label: 'Ванна',
      ...data.filter((el) => el.name === 'bath')[0],
    };
    this.bathroom = {
      label: 'Санузел',
      ...data.filter((el) => el.name === 'bathroom')[0],
    };
    this.waterSupply = {
      label: 'Водоснабжение',
      ...data.filter((el) => el.name === 'waterSupply')[0],
    };
  }
}

export default Flat;
