import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID e475c0bf06c20d50d308f445386bb8fe7e64c4f6292b30f1428188f6b9e01b75'
  }
});
