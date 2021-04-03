import React from 'react'
import numeral from 'numeral'
import {Circle, Popup} from 'react-leaflet'

const casesTypeColors = {
  cases: {
    option: { color:"#cc1034", fillColor: "#cc1034" },
    multiplier: 25000,
  },
  recovered: {
    option: { color:"#7dd71d", fillColor: "#7dd71d" },
    multiplier: 25000,
  },
  deaths: {
    option: { color:"#ff6c47", fillColor: "#ff6c47" },
    multiplier: 25000,
  },
};

export const showDataOnMap = (data, casesType = 'cases') => (
  data.map((country) => (
    <Circle
      key={country.country}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={casesTypeColors[casesType].option}
      radius={
        Math.sqrt(country[casesType] * casesTypeColors[casesType].multiplier)
      }
    >
      <Popup className="popup">
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ))
);
