import React from 'react';
import './styles/FavoriteItem.css';

function FavoriteItem({name, description, price, link}) {
    return (
        <div className="favoriteItem">

            <div className="favoriteItem__text">
                <h4>{name}</h4>
                <p>{description}</p>

                <h5>${price}</h5>

                <a href={link} target="_blank" rel="noreferrer">
                    <i className="fas fa-shopping-cart"></i>
                    Order Now
                </a>

            </div>
        </div>
    )
}

export default FavoriteItem;
