import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { saveToken } from "./redux/actions";

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        try {
            const response = await axios.post('http://localhost:3001/login', credentials);
            toast.success("login successful");
            // sessionStorage.setItem('token', response.data.accessToken);
            //save token in redux store??
            dispatch(saveToken(response.data.accessToken));
            navigate('/container');
        } catch (error) {
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