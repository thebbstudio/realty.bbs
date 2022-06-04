import axios from 'axios';
import BASE_URL from './config';

class HttpRealtyData {
  static async getTypeRealtyAll(typeRealty: string) {
    let typeRealtyENGLISH: string = '';

    if (typeRealty === 'Квартира') {
      typeRealtyENGLISH = 'flat';
    } else if (typeRealty === 'Комната') {
      typeRealtyENGLISH = 'room';
    } else if (typeRealty === 'Дом') {
      typeRealtyENGLISH = 'house';
    }

    const response = axios.get(`${BASE_URL}/api/getdatarealty`, {
      params: {
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
        typeRealty: typeRealtyENGLISH,
        // format: 'json',
      },
    });
    return response;
  }

  static async getOne(realtyId: string | undefined) {
    const response = axios.get(`${BASE_URL}/api/getdataonerealty`, {
      params: {
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
        realtyId,
        // format: 'json',
      },
    });
    return response;
  }
}

export default HttpRealtyData;
