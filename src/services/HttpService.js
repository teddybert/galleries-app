import axios from "axios";

export default class HttpService {
    constructor() {
        this.client = axios.create({
            baseURL: "http://localhost:8000/api",
        });

        this.client.interceptors.request.use(function(req) {
            const token = localStorage.getItem("token");
            if(token) {
                req.headers["Authorization"] = `Bearer ${token}`;
                return req;
            }
        });
    }
}