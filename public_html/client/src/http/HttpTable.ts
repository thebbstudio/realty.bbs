import axios from 'axios';
import BASE_URL from './config';

class HttpTable {
  static async getData(typeRealty: string) {
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
}

export default HttpTable;
