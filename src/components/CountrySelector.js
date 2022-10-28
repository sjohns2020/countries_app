import React from "react";
import Country from "./Country";

const CountrySelector = ({countries, handleSelectedCounry, selectedCountry, setFavouriteCountryID}) => {

    const countryOptions = countries.map((country) => {
        return(
            <option value={country.alpha3Code} key={country.alpha3Code}>{country.name}</option>
        )
    })

    const handleOnChange = function (event) {
        handleSelectedCounry(event.target.value)

    }

    return ( 
        <>
        <h1>Country Selector</h1>
        <label htmlFor="selector">Select a country: </label>
        <select name="" id="selector" onChange={handleOnChange}>
            {countryOptions}
        </select>
        <Country selectedCountry={selectedCountry} setFavouriteCountryID={setFavouriteCountryID}/>
        </>
     );
}
 
export default CountrySelector;