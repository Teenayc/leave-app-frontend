import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {RouterProvider,BrowserRouter as Router} from "react-router-dom";
import router from "./router.jsx";
import {ContextProvider} from "./contexts/ContextProvider";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <ContextProvider>
        <RouterProvider router={router}/>
      </ContextProvider>
    </PrimeReactProvider>
  </React.StrictMode>,
)
