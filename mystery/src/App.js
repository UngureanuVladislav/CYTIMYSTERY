import React from 'react';
import './app.css';
import Home from './Components/Home/home';
import Navbar from './Components/Navbar/navbar'; 
import Main from './Components/Main/main';
import About from '../src/Components/Pages/About/About'; 
import Footer from './Components/Footer/footer';
import { Routes, Route, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/' || location.pathname === '/main';

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      {isMainPage && <Main />}
      <About />
      <Footer />
    </>
  );
}

export default App;
