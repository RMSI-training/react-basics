import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Userform from './Userform';
import ErrorPage from './error-page';
import Container from './Container';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';
const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage />, },
  { path: "/userform", element: <Userform />, errorElement: <ErrorPage />, },
  { path: "/container", element: <Container />, errorElement: <ErrorPage />, },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));// React element 
const store1 = createStore(reducers);
root.render(
  <React.StrictMode>
    <Provider store={store1}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
//--------define redux store  --------