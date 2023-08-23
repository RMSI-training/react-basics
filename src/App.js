import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {//controller
  const [user, setUser] = useState({ //model =state
    fname: 'John',
    lastname: 'Carter'
  });

  //logic 
  return (//jsx
    <span> //view
      <input value={user.fname} onChange={(event)=> setUser({fname: event.target.value})}></input>
      <input value={user.lastname}></input>
    </span>
  )
}

export default App;
