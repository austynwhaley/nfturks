import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

function Navbar({ walletAddress, setWalletAddress }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleConnectWallet = () => {
    activateBrowserWallet();
  };

  useEffect(() => {
    setWalletAddress(account);
  }, [account, setWalletAddress]);


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <iframe title="3D Object" id="9df5df3f-8cc9-4a5f-b8dc-83a196130e13" src="https://app.vectary.com/viewer/v1/?model=9df5df3f-8cc9-4a5f-b8dc-83a196130e13&env=studio1" frameborder="0" width="100%" height="380"></iframe>          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            

          <div>
            {walletAddress && etherBalance ? (
              <Button
                buttonStyle='btn--outline'
                classname='wallet-info-button'
                variant='contained'
                size='large'
                color='primary'
                disableElevation
              >
                <span className='eth-balance'>{`${parseFloat(
                  formatEther(etherBalance)
                ).toFixed(3)} ETH`}</span>
                <span className='wallet-address'>{`${walletAddress.slice(
                  0,
                  5
                )}...${walletAddress.slice(-4)}`}</span>
              </Button>
            ) : (
              <Button onClick={handleConnectWallet} buttonStyle='btn--outline' variant='contained' size='large' color='primary'>
                <span>Connect</span> <Link to='/' />
              </Button>
            )}
          </div>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Connect</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
