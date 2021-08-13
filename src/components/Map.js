import React from 'react'
import './styles/Map.css';
import { GoogleMap, useJsApiLoader, InfoWindow } from '@react-google-maps/api';
import { API_KEY } from '../private-key';

const containerStyle = {
  width: '100vw',
  height: '400px'
};

const center = {
    lat: 24.560961,
    lng: -81.778570
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
      })
        
      return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
        >

        <InfoWindow
            position={center}
        >
            <a  className="infoWindow"
                href="https://www.google.com/maps?ll=24.560722,-81.777264&z=18&t=m&hl=en-GB&gl=US&mapclient=apiv3&cid=7007746473258657297"
                target="_blank"
                rel="noreferrer">
                <p>Kim's Kuban</p>
                <small>2302 N Roosevelt Blvd, Key West, FL 33040</small>
            </a>
        </InfoWindow>
            
        </GoogleMap>
      ) : <></>
}

export default Map;