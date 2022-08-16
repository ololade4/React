import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Layout from './Layout';
import Contact from './Contact';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basic from './Basic';
import Valuemax from './value';
import Dev from './expo';
import Niceone from './drink' 
import Tao from './self';

export default function Main() {
     return (
    <BrowserRouter>
      <h1 style={{color:"green", paddingLeft:"20px",textAlign:"center"}}>WELCOME TO VALUEMAX CODER HUB</h1>
      
       
     
      <Routes>
     
        <Route path ="/" element={ <Layout />}>
          <Route path='/Home' element={ <Home />} />
        <Route path ="/Contact" element={ <Contact />} />
        <Route path="/Basic" element={ <Basic />}/> 
        
        
        </Route>
      </Routes> 
      <Dev />
      <Valuemax />  
      <Niceone />
    </BrowserRouter>
     )  
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
