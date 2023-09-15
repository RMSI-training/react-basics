import { useState } from "react";

function Register() {
    const [registerData, setRegisterData] = useState({
        firstName: 'Pariwesh',
        lastname: '',
        email: '',
        pwd: ''
    });
    const updateValue = (event) => {
        setRegisterData({ ...registerData, [event.target.name]: event.target.value });
    }
    function reset() {
        setRegisterData({ firstName: '',
        lastname: '',
        email: '',
        pwd: ''});
    }
    return (
        <div>
            <form className="container">
                <div className="card-body">
                    <div className="form-group">
                        <input name='firstName' onChange={updateValue} value={registerData.firstName} placeholder="User name" className="form-control" ></input>
                    </div>
                    <div className="form-group">
                        <input value={registerData.lastname} placeholder="Last Name" className="form-control" name="lastname" onChange={updateValue}></input>
                    </div>
                    <div className="form-group">
                        <input value={registerData.pwd} placeholder="Password" className="form-control" name="pwd" onChange={updateValue} type='password'></input>
                    </div>
                    <div className="form-group">
                        <input name='email' onChange={updateValue} value={registerData.email} placeholder="Email" className="form-control"></input>
                    </div>
                    
                    <button type="submit" className="btn btn-success" >Register</button>
                    <button type="button" className="btn btn-success" onClick={reset}>Reset</button>

                </div>
            </form>
        </div>
    )
}
export default Register;