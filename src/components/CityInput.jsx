import React, { useRef, useState, useContext } from "react";
import { context } from "../context";

const CityInput = () => {
  const apiKey = "b335475ef9e5389e95adad72d7198c7c";
  const [inputText, setInputText] = useState("");
  const [searchedCities, setSearchedCities] = useState([]);
  const { dispatch } = useContext(context);

  const timeoutRef = useRef(null);

  const requestGeoData = async (city) => {
    if (city) {
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

      const response = await fetch(url);
      setSearchedCities(await response.json());
    } else setSearchedCities([]);
  };

  const requestForecastData = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    dispatch({ type: "switch", payload: await response.json() });
    setInputText("");
    setSearchedCities([]);
  };

  const getCities = (e) => {
    setInputText(e.target.value);

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => requestGeoData(e.target.value), 500);
  };

  return (
    <>
      <input
        className="city-input"
        type="text"
        placeholder="City..."
        value={inputText}
        onChange={(e) => getCities(e)}
      ></input>
      <div className="city-list">
        {searchedCities.length > 0
          ? searchedCities.map((city) => (
              <p
                key={city.lat}
                className="city"
                onClick={() => requestForecastData(city.lat, city.lon)}
              >
                {city.name} {city.country}
              </p>
            ))
          : ""}
      </div>
    </>
  );
};

export default CityInput;
