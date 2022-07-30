import React from 'react';
import Burger from '../components/Burger';
import './Nav.css';
import MenuPDF from '../images/KimsKuban_Menu_2022.pdf';

function Nav({toggleSidebar, setToggleSidebar}) {

    return (
        <div className="nav">
            <nav>
                <h4><a href="#home">Kim's Kuban</a></h4>

                <ul className="nav__links">
                    <li>
                        <a 
                        href={MenuPDF}
                        target="_blank" 
                        rel="noopener noreferrer">Menu</a>
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
