import logo from './logo.svg';
import './App.css';

function App() {//controller
  const user = { //model =state
    fname: 'John',
    lastname: 'Carter'
  };


  //logic 
  return (//jsx
    <span> //view
      <input value={user.fname}></input>
      <input value={user.lastname}></input>
    </span>
  )
}

export default App;
