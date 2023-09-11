import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Counter from "./Counter";
import sendSavedUser, { user_count } from "./redux/actions";

function Userform() { //functional component
  const [user, setUser] = useState({ //model =state
    firstname: 'John',
    lastname: 'Carter',
    gender: 'Male',
    location: 'Brisbane'
  });
  const [locations, setLocations] = useState([]);
  const updateValue = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }
  useState(async function () {//constructor
    //get locations
    const response = await fetch(process.env.REACT_APP_URL + 'locations');
    setLocations(await response.json());
    // getUsers();
  })
 
  async function save() {
    try {
      user_count()
      const response = await axios.post(process.env.REACT_APP_URL + "users",
        JSON.stringify(user),
        {
          headers: { 'Content-Type': 'application/json' }
        });
      const savedUser = response.data;
      // setUsers([...users, savedUser]);
      // getUsers();
      dispatch(sendSavedUser(savedUser));
    } catch (error) {
      console.log(error);
    }
  }
  //logic 
  const dispatch = useDispatch();
  return (//jsx
    <span >
      <div className="form-group">
        <input value={user.firstname} className="form-control" name='firstname' onChange={updateValue}></input>
        <small id="emailHelp" className="form-text text-muted">First name is mandatory</small>
        <input value={user.lastname} className="form-control" name='lastname' onChange={updateValue}></input>
        <input type='radio' name="gender" className="radio" value='Male' onChange={updateValue} />Male
        <input type='radio' name="gender" className="radio" value='Female' onChange={updateValue} />Female
        <select name="location" onChange={updateValue}>
          {locations.map(location => <option key={location} value={location}>{location}</option>)}
        </select>
      </div>
      <button className='btn btn-primary' onClick={save}>Save</button>
    </span>
  )
  
}
export default Userform;