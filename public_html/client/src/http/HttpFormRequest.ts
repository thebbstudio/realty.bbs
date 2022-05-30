import axios from 'axios';
import BASE_URL from './config';

class HttpFormRequest {
  static async send(form: object) {
    const response = await axios.post(`${BASE_URL}/api/createrealty`, {
      params: {
        ...form,
      },
    });
    return response;
  }
}

export default HttpFormRequest;
