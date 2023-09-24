import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themovidborg/3"
});


export default instance;