import React from 'react';
import './styles/CallButton.css';

function CallButton() {
  return (
    <div className="callbutton">
      <div className="callbutton__border1"></div>
      <div className="callbutton__border2"></div>
      <a href="tel:+1305-296-2878">
        <i className="fas fa-phone"></i>
      </a>
    </div>
  )
}

export default CallButton;
