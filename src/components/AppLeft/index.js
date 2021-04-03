import React from 'react'
import Header from './components/header'
import InfoBox from './components/infoBox'
import Map from './components/Map'
import {useContext} from 'react';
import {CountryContext} from '../../context/country-context'
import {prettyPrintStat} from '../../utils/prettyPrintStat';


function AppLeft() {

  const {countryInfo, setCasesType, casesType} = useContext(CountryContext)

  return (
    <div className="app__left">
      <Header />
      <div className="app__stats">
        <InfoBox
          active={casesType === 'cases'}
          onClick={e => setCasesType('cases')}
          title="Coronavirus Cases"
          total={prettyPrintStat(countryInfo.cases)}
          cases={prettyPrintStat(countryInfo.todayCases)}></InfoBox>
        <InfoBox
          active={casesType === 'recovered'}
          onClick={e => setCasesType('recovered')}
          title="Recovered"
          total={prettyPrintStat(countryInfo.recovered)}
          cases={prettyPrintStat(countryInfo.todayRecovered)}></InfoBox>
        <InfoBox
          active={casesType === 'deaths'}
          onClick={e => setCasesType('deaths')}
          title="Deaths"
          total={prettyPrintStat(countryInfo.deaths)}
          cases={prettyPrintStat(countryInfo.todayDeaths)}></InfoBox>
      </div>
      <Map />
    </div>
  )
}

export default AppLeft
