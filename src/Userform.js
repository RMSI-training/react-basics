import { useState } from "react";
import Counter from "./Counter";

function Userform() { //functional component
  const [user, setUser] = useState({ //model =state
    firstname: 'John',
    lastname: 'Carter',
    gender: 'Male',
    location: 'Brisbane'
  });
  const [locations, setLocations] = useState([]);
  const [users, setUsers] = useState([]);
  const updateValue = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }
  useState(async function () {//constructor
    //get locations
    const response = await fetch(process.env.REACT_APP_URL + 'locations');
    setLocations(await response.json());
    getUsers();
  })
  async function getUsers() {
    try {
      const response = await fetch(process.env.REACT_APP_URL + "users");
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  }
  async function save() {
    try {
      const response = await fetch(process.env.REACT_APP_URL + "users", {//ajax
        method: process.env.REACT_APP_METHOD,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });
      const savedUser = await response.json();
      setUsers([...users, savedUser]);
    } catch (error) {
      console.log(error);
    }
  }
  //logic 
  return (//jsx
    <span >
      <div className="form-group">
        <input value={user.firstname} className="form-control" name='firstname' onChange={updateValue}></input>
        <input value={user.lastname} className="form-control" name='lastname' onChange={updateValue}></input>
        <input type='radio' name="gender" className="radio" value='Male' onChange={updateValue} />Male
        <input type='radio' name="gender" className="radio" value='Female' onChange={updateValue} />Female
        <select name="location" onChange={updateValue}>
          {locations.map(location => <option key={location} value={location}>{location}</option>)}
        </select>
      </div>
      <button className='btn btn-primary' onClick={save}>Save</button>
      <Counter count={users.length} prop2={user.firstname}/>
      <table className="table table-striped">
        <thead><th>firstname</th>
          <th>Last Name</th>
          <th>Gender</th></thead>
        <tbody>
          {users.map((user, index) => {
            return <tr key={user.id}><td>{index}. {user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.gender}</td>
              <td><button className="btn btn-danger" onClick={() => deleteUser(user.id)}>X</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </span>
  )
  async function deleteUser(id) {
    try {
      const response = await fetch(process.env.REACT_APP_URL + 'users/' + id, {
        method: 'DELETE'
      });
      getUsers();
    } catch (error) {

    }

  }
}
export default Userform;