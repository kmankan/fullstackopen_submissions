import countryQuery from '../services/countries';
import DateTime from './DateTime';
import {useState, useEffect} from 'react';

const Weather = ({countryDetails, countryName, capital}) => {
  const [weatherData, setWeatherData] = useState(null);
  const [dateTimeInfo, setDateTimeInfo] = useState(null);

  useEffect(() => {
    if (capital) {
      countryQuery
      .getGeoCodingFor(capital)
      .then(geoData => {
        const lat = geoData[0].lat
        const lon = geoData[0].lon
        return countryQuery.getWeatherInfoFor(lat, lon)
      .then(weatherDataForCapital => {
        setWeatherData(weatherDataForCapital)
        return countryQuery.getDateTimeInfo(lat, lon)
      .then(dateTimeForCapital => {
        setDateTimeInfo(dateTimeForCapital)
      })
      })
     })
    }
  }, [capital]) //dependency variable is the capital

  if (!weatherData || !dateTimeInfo) {
    return <p>Loading weather data...</p>;
  } else {
      return (
        <div>
          <DateTime 
          date={dateTimeInfo.date}
          time={dateTimeInfo.time_12}
          timezone={dateTimeInfo.timezone}
          />
          <h3>Weather</h3>
          <p>temperature: {weatherData.main.temp}{'\u00B0'}C</p>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
          <p>wind: {weatherData.wind.speed} m/s</p>
        </div>
      )
    }
};

export default Weather