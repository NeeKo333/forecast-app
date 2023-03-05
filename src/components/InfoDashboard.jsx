import React, { useContext } from "react";
import { context } from "../context";

const InfoDashboard = () => {
  const { selectedCity } = useContext(context);
  console.log(selectedCity);
  return (
    <div className="dashboarad">
      <h2>{selectedCity.name}</h2>
      <div className="forecast-info">
        <span className="temperature">{selectedCity.main.temp}</span>
        <span className="weather-info">{selectedCity.weather[0].main}</span>
      </div>
    </div>
  );
};

export default InfoDashboard;
