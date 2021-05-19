import React, { useState } from "react";
import './App.css';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <br/>
      <div id="wrapper">
        <a
          className="App-link"
          href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xae8cb2db90fb3bb3da5dd33a6dfb89a7ef3860d9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy BabaBooey Coin
        </a>
      </div>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
