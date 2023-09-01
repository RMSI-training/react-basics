import { useState } from "react";


function Userform() { //functional component
  const [user, setUser] = useState({ //model =state
    firstname: 'John',
    lastname: 'Carter',
    gender: 'Male',
    location: 'Brisbane'
  });
  const [users, setUsers] = useState([]);
  const updateValue = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }
  useState(async function (params) {//constructor
    // const promise =  fetch("http://localhost:3001/users");
    // promise.then(function (response) {
    //   response.json().then(function (users) {
    //     setUsers(users);
    //   })
    // })
    try {
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  })
  async function save() {
    try {
      const response = await fetch("http://localhost:3001/users", {//ajax
        method: 'POST',
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
          <option defaultChecked value='bangalore'>Bangalore</option>
          <option value='Brisbane'>Brisbane</option>
          <option value='Hydrabad'>Hydrabad</option>
        </select>
      </div>
      <button className='btn btn-primary' onClick={save}>Save</button>
      <table className="table table-striped">
        <thead><th>firstname</th>
          <th>Last Name</th>
          <th>Gender</th></thead>
        <tbody>
          {users.map((user, index) => {
            return <tr><td>{index}. {user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.gender}</td>
            </tr>
          })}
        </tbody>
      </table>
    </span>
  )
}
export default Userform;