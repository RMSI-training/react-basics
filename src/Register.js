import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({
        firstName: 'Pariwesh',
        lastname: '',
        email: '',
        password: ''
    });
    const updateValue = (event) => {
        setRegisterData({ ...registerData, [event.target.name]: event.target.value });
    }
    function reset() {
        setRegisterData({
            firstName: '',
            lastname: '',
            email: '',
            password: ''
        });
    }

    async function register(event) {
        event.preventDefault();
        // ajax ,post
        const response = await fetch("http://localhost:3001/register", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(registerData)
        });
        console.log(response);
        if (response.status >= 200 & response.status <= 400) {
            navigate('/login');
        } else {
            toast.error('Registration failed..', {
                closeOnClick: true
            });
        }

    }
    return (
        <div>
            <form className="container" onSubmit={register}>
                <div className="card-body">
                    <div className="form-group">
                        <input name='firstName' onChange={updateValue} value={registerData.firstName} placeholder="User name" className="form-control" ></input>
                    </div>
                    <div className="form-group">
                        <input value={registerData.lastname} placeholder="Last Name" className="form-control" name="lastname" onChange={updateValue}></input>
                    </div>
                    <div className="form-group">
                        <input value={registerData.password} placeholder="Password" className="form-control" name="password" onChange={updateValue} type='password'></input>
                    </div>
                    <div className="form-group">
                        <input type='email' name='email' onChange={updateValue} value={registerData.email} placeholder="Email" className="form-control"></input>
                    </div>

                    <button type="submit" className="btn btn-success" >Register</button>
                    <button type="button" className="btn btn-success" onClick={reset}>Reset</button>

                </div>
            </form>
        </div>
    )
}
export default Register;