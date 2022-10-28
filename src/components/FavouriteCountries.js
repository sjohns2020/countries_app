import React from "react";

const FavouriteCountries = ({favCountries, setFavToRemove}) => {


    const handleOnClick = function (event) {
        setFavToRemove(event.target.value)
    }


    const favNodes = favCountries.map((country) => {
        return (
            <li>
                <p style={{color: "red"}}><strong>I LOVE: {country.name}</strong></p>
                <img className="flag" src={country.flag} alt="flag" />
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
                <p>Language: {country.language}</p>
                <button onClick={handleOnClick} value={country.alpha3Code}>Remove From Favourites</button>
            </li>
        )
    })


    return ( 
        <>
        <h2>List of Favourites Countries</h2>
        <ul>
            {favNodes}
        </ul>
        </>
     );
}
 
export default FavouriteCountries;