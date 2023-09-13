import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Userform from './Userform';
import { ErrorPage } from './error-page';
import Container from './Container';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';
import Login from './Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));// React element 
const store1 = createStore(reducers);
root.render(
  <React.StrictMode>
    <Provider store={store1}>

      <App></App>
    </Provider>
  </React.StrictMode>
);
//--------define redux store  --------