import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

const twitterApi = axios.create({
    baseURL: API_URL
});

twitterApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    };

    return config;
});

export default twitterApi;