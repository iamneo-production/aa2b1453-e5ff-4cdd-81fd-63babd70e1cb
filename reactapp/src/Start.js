import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';

function Start() {
  return (
    <div className='bgr'>
    <div style={{ backgroundColor: 'black' }} id="scr">
      <Link to="/Option">
        <div id="logo"></div>
      </Link>
    </div>
    </div>
  );
}

export default Start;
