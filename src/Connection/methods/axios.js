import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = 'https://financerecorder.mangotech-api.com/api/v1';

const apiInstance = axios.create();

apiInstance.interceptors.request.use(
  async request => {
    let user = await AsyncStorage.getItem('userdata');
     let tokenParse = JSON.parse(user);
    if (tokenParse != undefined) {
      request.headers = {
        Authorization: tokenParse.token,
        
      };
    } else {
      request.headers = {
        'Content-Type': request.headers['Content-Type'],
      };
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);


export default apiInstance;

