import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "./App.css";

function App() {
  const [geoLocationInfo, setGeoLocationInfo] = useState({});
  const [ipvalue, setIpvalue] = useState("");
  const [inputFormatError, setInputFormatError] = useState(false);
  const [coordinates, setCoordinates] = useState([40.71427, -74.00597]);

  const handleChange = (e) => {
    const inputText = e.target.value;
    const allowedInputRegex = /^[0-9.]*$/;
    if (allowedInputRegex.test(inputText)) {
      setIpvalue(inputText);
      setInputFormatError(false);
    } else {
      setInputFormatError(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_UlIz701pA0XdcRdIMGLztdSPNGMwt&ipAddress=${ipvalue}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setGeoLocationInfo(data);
        setCoordinates([data.location.lat, data.location.lng]);
      });
  };

  useEffect(() => {
    fetch(
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_UlIz701pA0XdcRdIMGLztdSPNGMwt"
    )
      .then((resp) => resp.json())
      .then((data) => {
        const lat = data.location.lat;
        const lng = data.location.lng;
        setGeoLocationInfo(data);
        setCoordinates([lat, lng]);
      });
  }, []);

  function MapUpdater() {
    const map = useMap();

    useEffect(() => {
      if (map) {
        map.setView(coordinates, map.getZoom());
      }
    }, [map]);

    return null;
  }
  console.log(coordinates);

  return (
    <>
      <div className="heroSection"></div>
      <div id="map">
        {coordinates !== null ? (
          <MapContainer center={coordinates} zoom={15} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coordinates}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            <MapUpdater />
          </MapContainer>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="mainSection">
        <div className="heading">IP Address Tracker</div>
        <div id="detailsContainer">
          <div className="searchInputContainer">
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                value={ipvalue}
                inputMode="numeric"
                onChange={(e) => handleChange(e)}
                className="searchInput"
              />
              <button className="arrow-icon">
                <img src="/src/assets/images/icon-arrow.svg" alt="arrow" />
              </button>
            </form>

            {inputFormatError && (
              <div style={{ color: "red" }}>
                Invalid input format. Please enter only numbers and decimal
                points.
              </div>
            )}
          </div>

          <div className="infoContainer">
            <div>
              <h3 htmlFor="ip">IP Address</h3>
              <h2>{geoLocationInfo?.ip}</h2>
            </div>
            <hr />
            <div>
              <h3 htmlFor="location">Location</h3>
              <h2>
                {geoLocationInfo?.location?.region},{" "}
                {geoLocationInfo?.location?.country}
              </h2>
            </div>
            <hr />
            <div>
              <h3 htmlFor="timezone">Timezone</h3>
              <h2>{geoLocationInfo?.location?.timezone}</h2>
            </div>
            <hr />
            <div>
              <h3 htmlFor="timezone">ISP</h3>
              <h2>{geoLocationInfo?.isp}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
