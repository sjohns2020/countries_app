import React, {useState, useEffect} from "react";
import CountrySelector from "../components/CountrySelector";
import FavouriteCountries from "../components/FavouriteCountries";

const CountriesBox = () => {

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState("")
    const [favCountries, setFavCountries] = useState([])

    async function fetchCountries() {
        const response = await fetch("https://restcountries.com/v2/all");
        const data = await response.json();
        setCountries(data)
    }
    useEffect(() => {
        fetchCountries()
    }, [])

    const totalPopulation = countries.reduce((total, country) => {
        return  total + country.population 
    }, 0)

    const handleSelectedCounry = (alpha3Code) => {
        const selectedCountryById = countries.find((country) => country.alpha3Code === alpha3Code)
        setSelectedCountry(selectedCountryById)
    }


    const setFavouriteCountryID = (id) => {
        const getFavouriteCountryById = countries.find((country) => country.alpha3Code === id)
        const cloneOfFavsList = [...favCountries, getFavouriteCountryById]
        setFavCountries(cloneOfFavsList)
    }

    const setFavToRemove = (alpha3Code) => {
        const country = countries.find((country) => country.alpha3Code === alpha3Code)
        const getIdOfCountryToRemove = favCountries.indexOf(country)
        const cloneOfFavs = favCountries.splice(getIdOfCountryToRemove, 1)
        setFavCountries(cloneOfFavs)
    }

    return ( 
        <>
        <h1>Countries App</h1>
        <h3>Global Population: {totalPopulation}</h3>

        <CountrySelector countries={countries} handleSelectedCounry={handleSelectedCounry} selectedCountry={selectedCountry} setFavouriteCountryID={setFavouriteCountryID} />
        <FavouriteCountries favCountries={favCountries} setFavToRemove={setFavToRemove} />
        </>
     );
}
 
export default CountriesBox;