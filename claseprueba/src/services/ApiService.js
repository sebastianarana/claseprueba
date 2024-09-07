// src/services/ApiService.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; 

export default {
  async getData() {
    return axios.get(API_URL);
  }
}
