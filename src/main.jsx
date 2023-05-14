import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';
import AuthProviders from './providers/AuthProviders';
import StateChange from './providers/StateChange';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateChange>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </StateChange>
  </React.StrictMode>,
)
