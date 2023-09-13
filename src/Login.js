import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export const Login = () => {
    const [credentials, setCredentials] = useState({
        login:'',
        pwd: ''
    });
    function login(e) {
        e.preventDefault();
        if(credentials.login === '' ){
            toast.warning('Please enter user name');
            return false;
        }
        if(credentials.pwd === '' ){
            toast.warning('Please enter password');
            return false;
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
                        <input name='login' onChange={updateValue} value={credentials.login} placeholder="User name" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <input value={credentials.pwd} placeholder="Password" className="form-control"></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-success" >Login</button>
            </form>
        </div>
    </div>)
}

export default Login;