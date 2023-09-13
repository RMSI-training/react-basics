import { useState } from "react";

function Register() {
    const [registerData,setRegisterData] = useState({
        firstName:'',
        lastname:'',
        email:'',
        pwd:''
    });
    const updateValue = (event) => {
        setRegisterData({ ...registerData, [event.target.name]: event.target.value });
      }
    return (
        <div>
            <form className="container">
                <div className="card-body">
                    <div className="form-group">
                        <input name='login' onChange={updateValue} value={registerData.firstName} placeholder="User name" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <input value={registerData.lastname} placeholder="Password" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <input name='login' onChange={updateValue} value={registerData.email} placeholder="User name" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <input value={registerData.pwd} placeholder="Password" className="form-control"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Register;