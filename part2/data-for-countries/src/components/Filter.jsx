import { useEffect } from 'react';

const Filter = ({country, setCountry, setCountriesFound, countriesFound, listOfAllCountries}) => {
  const handleCountrySearch = (event) => {
    event.preventDefault();
    // Update the filterText state with the current value of the input field
    console.log(event.target.value);
    setCountry(event.target.value);
    // Store the current value of the input field in a variable for filtering
    const stringToFilterOn = event.target.value;
    // Filter the persons array based on the input value (case-insensitive)
    // check both the name and number arrays for a match
    const filteredArray = listOfAllCountries.filter((countries) => {
      const lowerCaseCountry = countries.toLowerCase();
      return (
        lowerCaseCountry.includes(stringToFilterOn.toLowerCase())
      )
    });
  
    // Update the filteredList state with the filtered array of persons
    setCountriesFound(filteredArray);
  }

  useEffect(() => {
  }, [countriesFound]); // Dependency array includes countriesFound
  
return (
  <div>
    find countries: <input value={country} onChange={handleCountrySearch} />
  </div>
);
};

export default Filter;