import axios from 'axios';


const instance = axios.create({
    baseURL: "http://127.0.0.1:5001/clone-app-6e49e/us-central1/api"      // The API (cloud function) URL
    
    //baseURL: "http://127.0.0.1:5001/clone-app-6e49e/us-central1/api"      // The API (cloud function) URL
});

export default instance;