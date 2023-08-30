import { useState } from "react";
import "./App.css";
import Button from "./Button";
import { useGeoLocation } from "./useGeoLocation";
import { useCounter } from "./useCounter";

function Link({ children, lat, long, zoom }) {
  return (
    <a href={`https://www.openstreetmap.org/export#map=${zoom}/${lat}/${long}`}>
      {children}
    </a>
  );
}

function Main({ showLocation, lat, long }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      <p>Your GPS postion:</p>
      {showLocation && (
        <Link lat={lat} long={long} zoom={19}>
          {lat}-{long}
        </Link>
      )}
    </div>
  );
}

function Counter({ counter }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      <p>
        You requested position: <span> {counter}</span> times
      </p>
    </div>
  );
}

function Loader() {
  return <p>Loading...</p>;
}

function App() {
  const [showLocation, setShowLocation] = useState(false);
  const [location, isLoading] = useGeoLocation();
  const [counter, setCounter] = useCounter(0, "counter");

  //Distructure
  const lat = location?.[0];
  const long = location?.[1];

  // Handle
  function ShowHandle() {
    showLocation ? setShowLocation(false) : setShowLocation(true);
    setCounter((crr) => (crr = crr + 1));
  }

  return (
    <>
      <Button showHandle={ShowHandle}>Get My Position</Button>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <Main showLocation={showLocation} lat={lat} long={long}></Main>
      )}

      <Counter counter={counter}></Counter>
    </>
  );
}

export default App;
