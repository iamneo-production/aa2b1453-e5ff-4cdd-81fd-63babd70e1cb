import React, { useState } from 'react';
import './topnav.css'; // Import the CSS styles from the provided code.

const TopNav = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const handleMenuClick = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className={`topnav ${isResponsive ? 'responsive' : ''}`}>
      <a href="#home" className="active">
        Home
      </a>
      <a href="#news">Product</a>
      <div className="dropdown">
        <button className="dropbtn">
          Category <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Vegetables</a>
          <a href="#">Cooldrinks</a>
          <a href="#">DairyProducts</a>
          <a href="#">Healthdrinks</a>
        </div>
      </div>
      <a href="#contact">Feedback</a>
      <a href="#about">Cart</a>
      <a href="javascript:void(0);" style={{ fontSize: '15px' }} className="icon" onClick={handleMenuClick}>
        &#9776;
      </a>
    </div>
  );
};

export default TopNav;
