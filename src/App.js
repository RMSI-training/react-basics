import { Link } from 'react-router-dom';
import './App.css';
import Counter from './Counter';
import Userform from './Userform';

function App() {//controller
  return (
    <div>
      <Link to='/userform'>User Form</Link>
      <Link to='/container'>Container</Link>

      This is Home Page
    </div>

  )
}

export default App;
