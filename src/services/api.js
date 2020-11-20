import axios from 'axios';

const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7',
    params: {
        apiKey: process.env.REACT_APP_CC_API_KEY
    }
});

export default api;
