import React, {useContext}from "react";
import '../css/map.css';
import { Map as LeafletMap, MapContainer, TileLayer, useMap } from "react-leaflet";
import {CountryContext} from '../../../context/country-context'
import {showDataOnMap} from '../../../utils/showDataOnMap';

function Map() {

  const {mapCenter, mapZoom, mapCountries, casesType} = useContext(CountryContext);
  
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  return (
    <div className="map">
      <MapContainer center={mapCenter} zoom={mapZoom}>
        <ChangeView center={mapCenter} zoom={mapZoom}/>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(mapCountries, casesType)}
      </MapContainer>
    </div>
  );
}

export default Map;
