import React, {useState, useEffect} from 'react';
import { MenuItem, FormControl, Select, } from '@material-ui/core';
import {useContext} from 'react';
import {CountryContext} from '../../../context/country-context'

function Header() {
  const {country, countries, countryInfo, onCountryChange} = useContext(CountryContext)

  return (
    <div className="app__header">
      <h1>Covid-19 tracker</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" onChange={onCountryChange} value={country}>
        <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map((country) => (
            <MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Header;
