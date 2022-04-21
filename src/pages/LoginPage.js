import { useState } from "react";
import {useHistory} from "react-router-dom";
// import authService from "../services/AuthService";
import {login} from "../store/auth/slice";
import {useDispatch} from "react-redux";


export default function LoginPage({onLogin}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    async function handleSubmit(e) {
        e.preventDefault();
        setInvalidCredentials(false);
        try {
        //     await authService.login(credentials, setCredentials);
            dispatch(login(credentials));
            onLogin();
            history.push("/");
        } catch(error) {
            console.log("Error", error);
            setInvalidCredentials(true);
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
                
                <button>Log in</button>
                {invalidCredentials && (
                    <p style={{color: 'red', fontSize: 15}}>Invalid credentials</p>
                )}
            </form>
        </div>
    );
}