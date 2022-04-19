import {useState} from "react";
import {useHistory} from "react-router-dom";
import authService from "../services/AuthService";

export default function RegisterPage(onRegister) {
    const history = useHistory();
    const [credentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        password: "",
        password_confirmation: "",
        accept_terms_and_conditions: false,
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await authService.register(credentials);
            onRegister();
            history.push("/");
        } catch(error) {
            console.log("Error", error);
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input 
                  type="text"
                  required
                  placeholder="First Name"
                  value={credentials.first_name}
                  onChange={({target}) => {
                      setCredentials({...credentials, first_name: target.value});
                  }}
                 /> 
                <br/>
                
                <input 
                  type="text"
                  required
                  placeholder="Last Name"
                  value={credentials.last_name}
                  onChange={({target}) => {
                      setCredentials({...credentials, last_name: target.value});
                  }}
                 />
                <br/>

                <input 
                  type="text"
                  required
                  placeholder="Email"
                  value={credentials.email}
                  onChange={({target}) => {
                      setCredentials({...credentials, email: target.value});
                  }}
                 />
                <br/>

                <input 
                  type="password"
                  required
                  placeholder="Password"
                  minLength="8"
                  value={credentials.password}
                  onChange={({target}) => {
                      setCredentials({...credentials, password: target.value});
                  }}
                />
                <br/>

                <input
                  type="password"
                  placeholder="Confirm Password"
                  required 
                  minLength="8"
                  value={credentials.password_confirmation}
                  onChange={({target}) => {
                      setCredentials({...credentials, password_confirmation: target.checked});
                  }}
                />
                <br/>

                <input 
                  type="checkbox" 
                  required
                  value={credentials.accept_terms_and_conditions}
                  onChange={({target}) => {
                      setCredentials({...credentials, accept_terms_and_conditions: target.value})
                  }}
                 />
                <label>I accept terms and conditions</label>
                <br/>
                <br/>
                <button>Register</button>
            </form>
        </div>
    );
}