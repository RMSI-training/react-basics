import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    async function login(e) {
        e.preventDefault();
        if (credentials.email.trim() === '') {
            toast.warning('Please enter user name', {
                closeOnClick: true
            });
            return false;
        }
        if (credentials.password.trim() === '') {
            toast.warning('Please enter password');
            return false;
        }
        const response  = await axios.post('http://localhost:3001/login',credentials);
        if (response.status ==200) {
            toast.success("login successful");
            sessionStorage.setItem('token', response.data.accessToken);
        } else {
            toast.error("login failed");
        }
    }
    const updateValue = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }
    return (<div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form onSubmit={login} className="container">
                <div className="card-body">
                    <div className="form-group">
                        <input name='email' onChange={updateValue} value={credentials.email} placeholder="Email" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <input name='password' onChange={updateValue} value={credentials.password} placeholder="Password" className="form-control"></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-success" onClick={login}>Login</button>
            </form>
        </div>
    </div>)
}

export default Login;