import React, {useState, useEffect} from "react";
import {CountryContext} from '../context/country-context'
import { sortData } from '../utils/sort';

const CountryContextProvider = ({children}) =>{

  const[countries, setCountries] = useState([]);
  const[country, setCountry] = useState('worldwide');
  const[countryInfo, setCountryInfo] = useState({});
  const[tableData, setTableData] = useState([]);

  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response)=> response.json())
    .then((data) =>{
      setCountryInfo(data);
    })
  }, []);

  useEffect(()=>{
    const getCountriesData = async () =>{
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then((response)=> response.json())
      .then((data)=>{
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2
        }));

        const sortedData = sortData(data);
        setTableData(sortedData);
        setCountries(countries);
      })
    }
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
    const url = countryCode === 'worldwide'
      ? 'https://disease.sh/v3/covid-19/all'
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
    .then(response => response.json())
    .then((data)=>{
      setCountry(countryCode);
      setCountryInfo(data);
    })
  }
  return(
    <CountryContext.Provider value={{
      country,
      countries,
      countryInfo,
      onCountryChange,
      tableData,
    }}>{children}</CountryContext.Provider>
  )
}

export default CountryContextProvider;