import React, { useState, useEffect } from 'react';

const LocationTracker = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const successHandler = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setError(null);
    };

    const errorHandler = (err) => {
      setError(err.message);
    };

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const watchId = navigator.geolocation.watchPosition(successHandler, errorHandler, options);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {!error && latitude && longitude && (
        <div>
          Latitude: {latitude}<br />
          Longitude: {longitude}
        </div>
      )}
    </div>
  );
};

export default LocationTracker;
