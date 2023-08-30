import { useState } from "react";


function Userform() { //functional component
  const [user, setUser] = useState({ //model =state
    firstname: 'John',
    lastname: 'Carter'
  });
  const updateValue = (event) => {
    setUser({...user, [event.target.name]: event.target.value });
  }
  //logic 
  return (//jsx
    <span> //view
      <input value={user.firstname} name='firstname' onChange={updateValue}></input>
      <input value={user.lastname} name='lastname' onChange={updateValue}></input>
    </span>
  )
}
export default Userform;