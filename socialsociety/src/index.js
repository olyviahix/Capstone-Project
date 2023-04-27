import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Home from './pages/Home';
import Messages from './pages/Messages';
import CreateUserPage from './pages/CreateUserPage';
import SettingsPage from './pages/SettingsPage';

const container = document.getElementById('root');
const root = createRoot(container, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home/>
  },
  {
    path: "messages",
    element: <Messages/>
  },
  {
    path: 'createuser',
    element: <CreateUserPage/>
  },
  {
    path: 'settings',
    element: <SettingsPage/>
  }
]);

root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
