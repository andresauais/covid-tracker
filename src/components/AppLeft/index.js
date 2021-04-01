import React from 'react'
import Header from './components/header'
import InfoBox from './components/infoBox'
import Map from './components/Map'
import {useContext} from 'react';
import {CountryContext} from '../../context/country-context'


function AppLeft() {

  const {countryInfo} = useContext(CountryContext)


  return (
    <div className="app__left">
      <Header />
      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" total={countryInfo.cases} cases={countryInfo.todayCases}></InfoBox>
        <InfoBox title="Recovered" total={countryInfo.recovered} cases={countryInfo.todayRecovered}></InfoBox>
        <InfoBox title="Deaths" total={countryInfo.deaths} cases={countryInfo.todayDeaths}></InfoBox>
      </div>
      {/*Map*/}
      <Map />
      
    </div>
  )
}

export default AppLeft
