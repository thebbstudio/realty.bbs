import axios from 'axios';
import BASE_URL from './config';

class HttpTable {
  static async getData() {
    const response = axios.get(`${BASE_URL}/api/getdatarealty`, {
      params: {
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
        typeRealty: 'Квартира',
        // format: 'json',
      },
    });
    return response;
  }
}

export default HttpTable;
