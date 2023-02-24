import React, { useEffect, useState } from "react";
import "./css/style.css";

const Wapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pokhara");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="input">
          <input
            type="text"
            className="inputfield"
            placeholder="Search..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errormsg">
            No data found, please enter correct city name
          </p>
        ) : (
          <div className="info">
            <h2 className="location">
              <i className="fa-solid fa-location-dot"></i> {search}
            </h2>
            <h1 className="temp">{city.temp}&deg;Cel </h1>
            <h3 className="tempmin-max">
              Min: {city.temp_min}&deg;Cel | Max: {city.temp_max}&deg;Cel
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Wapp;
