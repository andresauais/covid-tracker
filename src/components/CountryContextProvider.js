import React, {useState, useEffect} from "react";
import {CountryContext} from '../context/country-context'
import { sortData } from '../utils/sort';

const CountryContextProvider = ({children}) =>{

  const[countries, setCountries] = useState([]);
  const[country, setCountry] = useState('worldwide');
  const[countryInfo, setCountryInfo] = useState({});
  const[tableData, setTableData] = useState([]);
  const[mapCenter, setMapCenter] = useState({lat: 53, lng: 9});
  const[mapZoom, setMapZoom] = useState(3);
  const[mapCountries, setMapCountries] = useState([]);
  const[casesType, setCasesType] = useState('cases');

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
        let sortedData = sortData(data);
        setTableData(sortedData);
        setMapCountries(data);
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
      countryCode === "worldwide"
          ? setMapCenter([34.80746, -40.4796])
          : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      setMapZoom(4);
    })
  }

  return(
    <CountryContext.Provider value={{
      country,
      countries,
      countryInfo,
      onCountryChange,
      tableData,
      mapZoom,
      mapCenter,
      mapCountries,
      casesType,
      setCasesType
    }}>{children}</CountryContext.Provider>
  )
}

export default CountryContextProvider;