import React, { useState } from "react";
import './App.css';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

function App() {
  return (
    <div className="App">
      <Header />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Footer />
    </div>
  );
}

export default App;