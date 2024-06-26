import { useEffect } from 'react';
import countryQuery from '../services/countries';
import Weather from './Weather'

const ShowCountryInfo = ({countriesFound, setCountriesFound, country, countryDetails, setCountryDetails}) => {

  useEffect(() => {
    if (countriesFound.length === 1) {
      countryQuery.getSpecificCountry(countriesFound[0].toLowerCase())
        .then(countryInfo => {
          setCountryDetails(countryInfo); // Assuming the API returns an array
        });
    }
  }, [countriesFound]); // Dependency array
  
  const printListOfCountries = () => {
    return countriesFound.map((countries, index) => (
      <div key={index}>
        <p>{countries} <button onClick={() => setCountriesFound([countries])}>show</button></p>
      </div>
    ))
  }

  const showSpecificCountryDetails = () => {
    if (!countryDetails) return null;  // Ensure countryDetails is loaded    
    return (
          <div>
            <h1>{countryDetails.name.common}</h1>
            capital: {countryDetails.capital[0]}
            <br></br>
            population: {countryDetails.population.toLocaleString('en-US')}
            <br></br>
            area: {countryDetails.area.toLocaleString('en-US')} km{String.fromCharCode(178)}
            <br></br>
            <h2>Languages:</h2> 
            <ul>
              {Object.values(countryDetails.languages).map((language, index) => (
                <li key={index}>
                  {language}
                </li>
              ))
              }
            </ul>

            <img src={countryDetails.flags.png} alt={countryDetails.flags.alt} />

            <h2>In {countryDetails.capital[0]}</h2>
            <Weather 
            countryDetails={countryDetails}
            countryName={countryDetails.name.common} 
            capital={countryDetails.capital[0]}
            />
          </div>
        )
    }
  
  // Show different things based on how many countries match search term
  if (countriesFound.length > 10) {
    return "too many countries"
  } else if (countriesFound.length <= 10 && countriesFound.length > 1) {
    return printListOfCountries();
  } else if (countriesFound.length == 1) {
    return showSpecificCountryDetails();
  }
};

export default ShowCountryInfo;