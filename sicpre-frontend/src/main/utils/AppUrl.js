import Axios from 'axios';

const apiUrl = Axios.create({
    baseURL: 'http://localhost:8080/api-sicpre',
    withCredentials: true
});

apiUrl.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

apiUrl.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default apiUrl;