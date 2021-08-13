import React from 'react';
import './styles/DropdownNav.css';

function DropdownNav({toggleSidebar}) {
  return (
    <nav className={(toggleSidebar)? "dropdownNav-active" : "dropdownNav"}>
      <div className="dropdownNav__container">
        <ul>
          <li>
            <a 
            href="https://orders.cake.net/11197294"
            target="_blank" 
            rel="noreferrer">Menu</a>
          </li>
          <li>
            <a href="#favorites">favorites</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default DropdownNav;
