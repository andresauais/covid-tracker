import React from 'react'
import Header from './components/header'
import InfoBox from './components/infoBox'
import Map from './components/Map'

function AppLeft() {
  return (
    <div className="app__left">
      <Header />
      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" total={countryInfo.todayCases} cases={countryInfo.cases}></InfoBox>
        <InfoBox title="Recovered" total={countryInfo.todayRecovered} cases={countryInfo.recovered}></InfoBox>
        <InfoBox title="Deaths" total={countryInfo.todayDeaths} cases={countryInfo.deaths}></InfoBox>
      </div>
      {/*Map*/}
      <Map />
    </div>
  )
}

export default AppLeft
