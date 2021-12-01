import './App.css';
import React, {useState} from 'react';
import Navbar from './Navbar/Navbar';
import { Button } from './Button/Button'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  const [walletAddress, setWalletAddress] = useState('')
  return (
    <Router>
      <div className="App">
        <Navbar walletAddress={walletAddress} setWalletAddress={setWalletAddress}/>
        <header className="App-header">
          <div className='mint'>
            <Button><span>Mint</span></Button>
          </div>
          <iframe title="Turk" height='500' width='500'  frameborder="0"  src="https://sketchfab.com/models/02f3b844a948482d80518e3803d79a2b/embed?autospin=1&autostart=1"> </iframe>
        </header>
      </div>
    </Router>
  );
}

export default App;
