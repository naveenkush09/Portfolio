import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import Navbars from './components/Navbars';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from 'react-router-dom';
import Info from './information/Info';
import Aboutme from './information/Aboutme';
import Qulification from './information/Qulification';
import Myproject from './Project/Myproject';
import Contactme from './information/Contactme';
import Session from './components/Session';
import Footer from './components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbars />
      <Info/>
      <Aboutme/>
      <Qulification/>
      <Myproject/>
      <Contactme/>
      <Session/>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

