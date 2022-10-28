import React from "react";

const Country = ({selectedCountry, setFavouriteCountryID}) => {

    //code to access a an object from an array some objects dont have it the key you are looking for 
    const currency = function (selectedCountry) {
        if (selectedCountry.currencies) {
            return selectedCountry.currencies[0].name
        }
        return "No currency"
    }
    const selectedCountryCurrency = currency(selectedCountry)

    const handleOnClick = function (event) {
        setFavouriteCountryID(event.target.value)
    }

    return ( 
        <>
        <p><strong>{selectedCountry.name}</strong></p>
        <img className="flag" src={selectedCountry.flag} alt="flag" />
        <p style={{color: "red"}}>Population: {selectedCountry.population}</p>
        <p>Region: {selectedCountry.region}</p>
        <p>Capital: {selectedCountry.capital}</p>
        <p>Language: {selectedCountry.language}</p>
        <p>Currency: {selectedCountryCurrency}</p>
        <button onClick={handleOnClick} value={selectedCountry.alpha3Code}>Add To Favourites</button>
        </>
     );
}
 
export default Country;