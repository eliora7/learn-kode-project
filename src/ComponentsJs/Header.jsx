import React from 'react';
import '../ComponentsCss/Header.css';


function Header() {
  return (
    <div className="Header">
        <img src={`${process.env.PUBLIC_URL}/assets/logo-mihlala.png`} alt="logo" id='logo-mihlala' />
        <img src={`${process.env.PUBLIC_URL}/assets/orange-dicor.png`} alt="orange-dicor" id='orange-dicor' />
    </div>
  );
}

export default Header;
