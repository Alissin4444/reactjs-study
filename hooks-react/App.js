import React, { useState, useEffect } from "react";

export default function App() {
  const [localization, setLocalization] = useState({});

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived);
  }, []);

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;
    setLocalization({ latitude, longitude });
  }
  return (
    <>
      Latitude: {localization.latitude} <br />
      Longitude: {localization.longitude}
    </>
  );
}
