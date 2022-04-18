import HttpService from "./HttpService";

class AuthService extends HttpService {
    // login,register,logout
    async register(credentials) {
        const {data} = await this.client.post("/register", credentials);
        return data;
    }

    async login(credentials) {
        const {data} = await this.client.post("/login", credentials);
        return data;
    }

    async logout() {
        this.client.post("/logout");
    }
}

const authService = new AuthService();
export default authService; 