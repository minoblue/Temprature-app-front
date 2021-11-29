import axios from "axios";

const ROOT_URL = 'http://localhost:3006/api/v1';

const instance = axios.create({
    baseURL: ROOT_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
