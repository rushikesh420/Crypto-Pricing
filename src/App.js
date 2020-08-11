import React from 'react';
import './App.css';
import CryptoCompare from "./CryptoCompare.js";
import Coindesk from './Coindesk';
import Coindesk_ETH from './CoinDesk_ETH';


function App() {

  
  return (
    <div className="App">
      <h1 className="App__head">Crypto-Currency Application</h1>
      <h3 className="App__subhead">Crypto Compare</h3>
      <CryptoCompare/>
      <Coindesk/>
      <Coindesk_ETH/>

 
      
    </div>
  );
}

export default App;
