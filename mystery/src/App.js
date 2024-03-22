import React from 'react';
import './app.css';
import Home from './Components/Home/home';
import Navbar from './Components/Navbar/navbar'; 
import Main from './Components/Main/main'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Main/>
    </>
  );
}

export default App;
