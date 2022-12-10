import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';


import Home from './components/Home';
import Layout from './components/Layout';
import Boek from './components/project/Boek'


export default function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='boek' element={<Boek />}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
