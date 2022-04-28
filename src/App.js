import './App.css';
import React, {useState} from 'react';
import Navbar from './Navbar/Navbar';
import { Button } from './Button/Button'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  const [walletAddress, setWalletAddress] = useState('')
  const [showMessage, setMessage] = useState(false)

  const showMessageFunction = () => {
    if (showMessage===false) {setMessage(true); setTimeout(() => {setMessage(false)}, 2000);;}
  }
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar walletAddress={walletAddress} setWalletAddress={setWalletAddress}/>
        <header className="App-header">
        { showMessage && <span className="mintMessage">Mint is not avaiable</span>}
          <div className='mint'>
            <Button  onClick={showMessageFunction}><span>Mint</span></Button>
          </div>
          <iframe title="Turk" height='500' width='500'  frameborder="0"  src="https://sketchfab.com/models/02f3b844a948482d80518e3803d79a2b/embed?autospin=1&autostart=1"> </iframe>
        </header>
        <div className='descriptionContainer'>
          <h2>What are <span className='turks'>Turks</span>?</h2>
          <p className='description'>--<span className='turks'>Turks</span> are your 1 of 1 minted 3D models that will be registered on the Etherum blockchain and will be able to be traded and sold.</p>
          <p className='description'>--<span className='turks'>Turk</span> holders will have FULL ownsership of their model, they will recieve a T-pose OBJ file of their model that can be used in any metaverse application.</p>
          <p className='description'>--But the best feature of all they are a key to enter the <span className='turks'>Turk</span> metaverse.</p>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
