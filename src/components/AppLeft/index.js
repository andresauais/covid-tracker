import React from 'react'
import Header from './components/header'
import InfoBox from './components/infoBox'
import Map from './components/Map'

function AppLeft() {
  return (
    <div className="app__left">
      <Header />
      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" total={123} cases={123}></InfoBox>
        <InfoBox title="Recovered" total={123} cases={123}></InfoBox>
        <InfoBox title="Deaths" total={123} cases={123}></InfoBox>
      </div>
      {/*Map*/}
      <Map />
    </div>
  )
}

export default AppLeft
