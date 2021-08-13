import React from 'react';
import './styles/Burger.css';

function Burger({toggleSidebar, setToggleSidebar}) {

    const toggle = () => setToggleSidebar(!toggleSidebar); 

    return (
        <div 
            className={(toggleSidebar)? 'burger burger-active' : 'burger'}
            onClick={toggle}
        >
            <span></span>
        </div>
    )
}

export default Burger
