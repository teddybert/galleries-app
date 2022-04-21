import {useState} from "react";
import {useHistory} from "react-router-dom";
// import authService from "../services/AuthService";
import {register} from "../store/auth/slice";
import {useDispatch} from "react-redux";

export default function RegisterPage(onRegister) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [credentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        accept_terms_and_conditions: false,
    });

    const [invalidCredentials, setInvalidCredentials] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setInvalidCredentials(false);
        // if(!e.target.accept_terms_and_conditions.checked) {
        //     alert("Terms and conditions must be accepted");
        // }
        try {
            // await authService.register(credentials);
            dispatch(register(credentials));
            onRegister();
            history.push("/");
        } catch(error) {
            console.log("Error", error);
            setInvalidCredentials(true);
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
                  type="email"
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
                      setCredentials({...credentials, password_confirmation: target.value});
                  }}
                />
                <br/>

                <br/>
                <input 
                  type="checkbox" 
                  required
                  value={credentials.accept_terms_and_conditions}
                  onChange={({target}) => {
                      setCredentials({...credentials, accept_terms_and_conditions: target.checked})
                  }}
                 />
                <label>I accept terms and conditions</label>
                <br/>
                <br/>
                {invalidCredentials && (
                    <p style={{color: 'red', fontSize: 15}}>Invalid credentials</p>
                )}
                <button>Register</button>
            </form>
        </div>
    );
}