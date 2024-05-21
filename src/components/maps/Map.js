
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 30.7333,  
  lng: 76.7794  
};

const locations = [
  { lat: 30.7333, lng: 76.7794, title: "Chandigarh" },
  { lat: 30.7046, lng: 76.7179, title: "Mohali" },
  { lat: 30.6942, lng: 76.8606, title: "Panchkula" }
];

const Map = () => {
  return (
    <LoadScript googleMapsApiKey=" AIzaSyBPiODyK3IMgrq0805wpHsA4gISlLMPl-w">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            title={location.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
