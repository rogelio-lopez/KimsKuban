import {useState} from 'react';
import './App.css';
import Nav from './navBar/Nav.js';

import HomeItem from './components/HomeItem';
import FavoriteItem from './components/FavoriteItem';
import Map from './components/Map';
import DropdownNav from './components/DropdownNav';
import CallButton from './components/CallButton';


function App() {
  
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="app">

      {/* Navigation Bar / Header */}
      <Nav toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar}/>

      {/* Dropdown Menu toggled with burger */}
      <DropdownNav toggleSidebar={toggleSidebar}/>

      {/* Call main number button (bottom right)*/}
      <CallButton />

      {/* Main Page / Home */}
      <section id="home">

        {/* Left */}
        <div className="home__text">
          <h1>
            Fast <span>Delivery</span> & Easy <span>Pickup</span>
          </h1>

          <div className="home__onlineOrder">
            <i className="fas fa-user-friends"></i>
            <a 
            href="https://orders.cake.net/11197294"
            target="_blank" 
            rel="noreferrer">Order Online!</a>
          </div>
        </div>

        {/* Middle */}
        <div className="home__logo">
          <div className="home__kimsLogo"></div>
        </div>

        {/* Right */}
        <div className="home__items">
            <HomeItem 
              title="Local Spot" 
              text="Where the locals like to go"
              icon={<i className="fas fa-map-marker-alt"></i>}/>
            <HomeItem 
              title="Pick Up" 
              text="Will be ready when you get there"
              icon={<i className="fas fa-shopping-bag"></i>}/>
            <HomeItem 
              title="Fast Delivery" 
              text="Delivered right at you doorstep"
              icon={<i className="fas fa-motorcycle"></i>}/>
        </div>

      </section>
    
      {/* Local Favorite Dishes */}
      <section id="favorites">

        <h2>Local Favorites</h2>
        <div className="favorites__container">
          <div className="favorites__itemGroup1">
            <FavoriteItem 
              name="Cuban Coffee" 
              description="Espresso with milk and sugar" 
              price="2.50"
              image=""
              link="https://orders.cake.net/11197294#8737230b-d9eb-4280-a80b-e3b052d2bf16"/>
            <FavoriteItem 
              name="Cheese Bread" 
              description="Hot and pressed classic cuban sandwich" 
              price="8.75" 
              image=""
              link="https://orders.cake.net/11197294#32744bf4-d210-4f9e-c071-69c662f9c4db"/>
          </div>
          <div className="favorites__itemGroup2">
            <FavoriteItem 
              name="Cuban Mix" 
              description="Tacos from mexico made with steak and corn tortillas" 
              price="10.95" 
              image=""
              link=""/>
            <FavoriteItem 
              name="Steak & Cheese" 
              description="Steak and cheese sandwich on cuban bread" 
              price="8.75" 
              image=""
              link="https://orders.cake.net/11197294#32744bf4-d210-4f9e-c071-69c662f9c4db"/>
          </div>
        </div>
      </section>
    
      {/* Laction using google maps */}
      <section id="map">
        <Map />
      </section>

      {/* COntact info and other information */}
      <section id="contact">
        <div className="contact__container" id="contact__info">
          <h4>Contact Us</h4>

          <div className="contact__number">
            <i className="fas fa-phone-alt"></i>
            <h4><a href="tel:+1305-296-2878">(305) 296-2878</a></h4>
          </div>

          <div className="contact__number">
            <i className="fas fa-phone-alt"></i>
            <h4><a href="tel:+1305-916-5754">(305) 916-5754</a></h4>
          </div>

          <p><a className="contact__email" href = "mailto: abc@example.com">Email: kimskuban@gmail.com</a></p>
        </div>

        <div className="contact__container" id="contact__hours">
          <h4>Opening Hours</h4>
          <div className="contact__time">
            <p>Monday - Friday</p>
            <p>6AM - 5PM</p>
          </div>
          <div className="contact__time">
            <p>Saturday</p>
            <p>6AM - 3PM</p>
          </div>
          <div className="contact__time">
            <p>Sunday</p>
            <p>CLOSED</p>
          </div>
        </div>

        <a 
        className="contact__container" 
        id="contact__direction" 
        href="https://www.google.com/maps?ll=24.560722,-81.777264&z=18&t=m&hl=en-GB&gl=US&mapclient=apiv3&cid=7007746473258657297" 
        target="_blank" 
        rel="noreferrer">
          <h4><i className="fas fa-directions"></i></h4>
          <h4 id="directionText">Get Directions</h4>
          <p>2302 N Roosevelt Blvd, Key West, FL 33040</p>
        </a>
      </section>

      {/* Backto top button */}
      <div className="backToTop">
        <a href="#home"><i className="far fa-arrow-alt-circle-up"></i></a>
      </div>

      {/* Footer with socials and credit to yours truly */}
      <footer>
        <div className="footer__credits">
          <p>
            Made with <i className="fas fa-heart"></i> & <i className="fas fa-coffee"></i> by <a href="http://rogeliolopez.dev" target="_blank" rel="noreferrer">Rogelio Lopez</a>
          </p>
        </div>
        <div className="footer__socials">
          <a 
          href="https://www.facebook.com/kimskubankw" 
          target="_blank" 
          rel="noreferrer"><i className="fab fa-facebook-square"></i></a>

          <a 
          href="https://www.instagram.com/kimskuban/" 
          target="_blank" 
          rel="noreferrer"><i className="fab fa-instagram"></i></a>
          
          <a 
          href="https://www.yelp.com/biz/kim-s-kuban-key-west" 
          target="_blank" 
          rel="noreferrer"><i className="fab fa-yelp"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
