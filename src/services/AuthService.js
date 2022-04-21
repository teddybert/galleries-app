import HttpService from "./HttpService";

class AuthService extends HttpService {
    async register(userData) {
        const {data} = await this.client.post("/register", userData);
        localStorage.setItem("token", data.token);
        return data;
    }

    async login(credentials) {
        const {data} = await this.client.post("/login", credentials);
        localStorage.setItem("token", data.token);
        return data;
    }

    async logout() {
        this.client.post("/logout");
        localStorage.removeItem("token");
    }

    async getActiveUser(id) {
        const {data} = await this.client.get(`/author/${id}`);
        return data;
    }
}

const authService = new AuthService();
export default authService; 