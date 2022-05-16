import React,{useEffect} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Seller from "./pages/seller";

import Login from './pages/Login';


function App() {
  
  
  return (
      <>
      <BrowserRouter>
      <Routes>
      
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/seller/*" element={<Seller/>}/>
        
       
      </Routes>
      </BrowserRouter>
   
      </>
  );
}

export default App;
