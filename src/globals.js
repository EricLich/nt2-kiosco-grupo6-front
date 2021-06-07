import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials:false,
    headers:{
        Acceppt: 'application/json',
        'Content-Type': 'application/json'
    }
})



module.exports = apiClient;