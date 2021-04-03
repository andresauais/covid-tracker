import {createContext} from 'react';

export const CountryContext = createContext(
  {
    country: 'worldwide',
    countries: [],
    countryInfo: [],
    tableData: [],
    mapCenter: {},
    mapZoom: 3,
    mapCountries: [],
    casesType: 'cases'
  }
);