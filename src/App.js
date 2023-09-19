import { BrowserRouter, createBrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Counter from './Counter';
import Login from './Login';
import Register from './Register';
import Userform from './Userform';
import Container from "./Container";
// const router = createBrowserRouter([
//   { path: "/", element: <Login />, errorElement: <ErrorPage />, },
//   { path: "/userform", element: <component1 />, errorElement: <ErrorPage />, },
//   { path: "/container", element: <Container />, errorElement: <ErrorPage />, },
// ]);
function App() {//controller
  return (
    <div>
      <ToastContainer closeOnClick position="top-center" theme="colored"></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}>User Form</Route>
          <Route path='/container' element={<Container />}>User Form</Route>

          <Route path='/register' element={<Register />}>Register</Route>
        </Routes>

      </BrowserRouter>
      {/* <Link to='/container'>Container</Link> */}

      This is Home Page
    </div>

  )
}

export default App;
