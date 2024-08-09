import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./components/firstpage.js";
import Completion from './components/completion.js';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Userslist from './components/userslist.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allroutes=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"Completion",
    element:<Completion/>
  },
  {
    path:"Userslist",
    element:<Userslist/>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={allroutes} />
  </React.StrictMode>
);


reportWebVitals();
