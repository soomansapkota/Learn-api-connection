import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './layout'
import FormData from './components/form';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<FormData/>}/>
    </Route>
  

  )
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router ={router}/>
  </React.StrictMode>
);


