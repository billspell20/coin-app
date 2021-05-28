import React, { useState } from "react";
import './App.css';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Baba from './Baba.jsx';

function App() {
  return (
    <div className="App">
      <Header fixed="top"/>
      <br/>
      <div id="wrapper">
        <Baba />
        <br/>
      </div>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
