import React from 'react';

import logo from 'assets/images/logo.png';

const Header = props => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <img src={logo} alt="Weather App" />
          Weather App
        </div>
      </div>
    </header>
  )
}

export default Header;