import HttpService from "./HttpService";

class AuthService extends HttpService {
    async register(credentials) {
        const {data} = await this.client.post("/register", credentials);
        localStorage.setItem("token", data.token);
    }

    async login(credentials) {
        const {data} = await this.client.post("/login", credentials);
        localStorage.setItem("token", data.token);
    }

    async logout() {
        this.client.post("/logout");
        localStorage.removeItem("token");
    }
}

const authService = new AuthService();
export default authService; 