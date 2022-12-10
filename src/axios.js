import axios from 'axios';


const instance = axios.create({
    baseURL: "https://us-central1-clone-app-6e49e.cloudfunctions.net/api"      // The deployed API (cloud function) URL 
    
    //baseURL: "http://127.0.0.1:5001/clone-app-6e49e/us-central1/api"      // The local API (cloud function) URL, mainly for development
});

export default instance;