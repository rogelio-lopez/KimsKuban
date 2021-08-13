import React from 'react';
import Burger from '../components/Burger';
import './Nav.css';

function Nav({toggleSidebar, setToggleSidebar}) {

    return (
        <div className="nav">
            <nav>
                <h4><a href="#home">Kim's Kuban</a></h4>

                <ul className="nav__links">
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

                <Burger toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>
            </nav>
        </div>
    )
}

export default Nav;
