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
import FollowPage from './pages/FollowList';
import Profile from './pages/Profile_copy';
import SettingsPage from './pages/SettingsPage';
import Notifications from './pages/NotificationPage';
import Explore from './pages/Explore'
import Profile2 from './pages/Profile';

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
    path: 'notification',
    element: <Notifications/>
  },
  {
    path: 'createuser',
    element: <CreateUserPage/>
  },
  {
    path:'follow',
    element:<FollowPage/>
  },
  {
    path: 'profile',
    element:<Profile/>
  },
  {
    path: 'settings',
    element: <SettingsPage/>
  },
  {
    path: 'notification',
    element:<Notifications/>
  },
  {
    path: 'explore',
    element:<Explore/>
  },
  {
    path: 'profile2',
    element:<Profile2/>
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
