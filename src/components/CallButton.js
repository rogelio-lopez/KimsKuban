import React from 'react';
import './styles/CallButton.css';

function CallButton() {
  return (
      <a href="tel:+1305-296-2878" className="callbutton">
        <i className="fas fa-phone"></i>
      </a>
  )
}

export default CallButton;
