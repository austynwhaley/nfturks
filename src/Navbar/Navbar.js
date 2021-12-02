import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

function Navbar({ walletAddress, setWalletAddress }) {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const handleConnectWallet = () => {
    activateBrowserWallet();
  };

  useEffect(() => {
    setWalletAddress(account);
  }, [account, setWalletAddress]);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>   
          <div className='walletButton'>
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
                ).toFixed(4)} ETH`}</span>
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
    
          {/* {button && <Button buttonStyle='btn--outline'>Connect</Button>} */}
        </div>
      </nav>
      <h1 className= 'title'>
        NFTurks
      </h1>
    </>
  );
}

export default Navbar;
