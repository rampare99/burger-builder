import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-42d3c-default-rtdb.firebaseio.com'
});

export default instance;