import React from "react";
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Home from './pages/home/Home';
import "./scss/main.scss";
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';

const App = () => {
    return (
      <div>
        <Router >
        <Header />

          <Routes>
            <Route path='/' element= {<Home />}/>
            </Routes>
            <Footer /> 
            </Router>
          
    
      </div>
    );
};

export default App;