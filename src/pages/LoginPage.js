import { useState } from "react";
import {useHistory} from "react-router-dom";
import authService from "../services/AuthService";


export default function LoginPage() {
    const history = useHistory();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await authService.login(credentials, setCredentials);
            history.push("/");
        } catch(error) {
            console.log("Error", error);
        }
    }

    return (
        <div>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  required
                  placeholder="Email"
                  value={credentials.email}
                  onChange={({target}) => { 
                    setCredentials({...credentials, email: target.value});
                  }} />

                <input 
                  value={credentials.password} 
                  required
                  type="password" 
                  placeholder="Password"
                  onChange={({target}) => { 
                      setCredentials({...credentials, password: target.value});
                  }} />

                <button type="submit">Log in</button>
            </form>
        </div>
    );
}