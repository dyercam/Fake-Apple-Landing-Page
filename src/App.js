
import React from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import BuyPage from './buy.js';
import MainPage from './mainPage.js';
import ScrollToTop from './scroll.js'
import './App.css';




function App() {


  

    return (
      <>
     <Router>
      <ScrollToTop/>
        <Routes>
          <Route  path="/" element={<MainPage />}/>
          <Route  path="/buy" element={<BuyPage/>} />
        </Routes>
     </Router>
     </>
    
    )
}



export default App;
