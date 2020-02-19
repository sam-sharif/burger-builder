import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-75ba7.firebaseio.com/'
});

export default instance;