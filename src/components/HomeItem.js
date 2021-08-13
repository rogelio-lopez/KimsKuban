import React from 'react';
import './styles/HomeItem.css';

function HomeItem({title, text, icon}) {
    return (
        <div className="homeItem">
            <div className="homeItem__icon">
                {icon}
            </div>
            <div className="homeItem__text">
                <p>{title}</p>
                <small>{text}</small>
            </div>
        </div>
    )
}

export default HomeItem;
