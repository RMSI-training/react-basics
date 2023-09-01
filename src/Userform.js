import { useState } from "react";


function Userform() { //functional component
  const [user, setUser] = useState({ //model =state
    firstname: 'John',
    lastname: 'Carter'
  });
  const [users, setUsers] = useState([]);
  const updateValue = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }
  useState(function (params) {//constructor
    const promise = fetch("http://localhost:3001/users");
    promise.then(function (response) {
      response.json().then(function (users) {
        setUsers(users);
      })
    })
  })
  function save() {
    const promise = fetch("http://localhost:3001/users", {//ajax
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    promise.then(function (response) {//100-399, success handler
      response.json().then((savedUser) => {
        setUsers([...users, savedUser]);
      })
      console.log(response);
    });
    promise.catch(function (error) {//400-599, error handler
      console.log(error);
    })
    console.log(user);
  }
  //logic 
  return (//jsx
    <span>
      <input value={user.firstname} name='firstname' onChange={updateValue}></input>
      <input value={user.lastname} name='lastname' onChange={updateValue}></input>
      <input type='radio' name="gender" value='Male' onChange={updateValue} />Male
      <input type='radio' name="gender" value='Female' onChange={updateValue} />Female
      <button onClick={save}>Save</button>
      <table>
        <thead><th>firstname</th></thead>
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