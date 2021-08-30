import React from 'react';
import './styles/FavoriteItem.css';
import Mix from '../images/mix.png';

function FavoriteItem({name, description, price, link, image}) {
    return (
        <div className="favoriteItem">

            <img src={image} alt={name}/>

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
