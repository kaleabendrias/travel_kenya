import { useState } from 'react';
import {useMapEvents, Marker, MapContainer, TileLayer, Circle, Popup, CircleMarker} from 'react-leaflet';
import './nav.css'
import { isAuthenticated } from './auth.helper';
import {  Navigate } from 'react-router-dom';

const center = [-1.2921, 36.8219]

const fillBlueOptions = { fillColor: 'blue' }
const redOptions = { color: 'red' }


function LocationMarker() {
  const [position, setPosition] = useState(null)

  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}


const Map = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/signin" />
  }
  return (
    <MapContainer center={center} zoom={10} scrollWheelZoom={true} wheelPxPerZoomLevel={150}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
    
    <CircleMarker center={[-1.2921, 36.8219]} pathOptions={redOptions} radius={20}>
      <Popup>Nairobi</Popup>
    </CircleMarker>

    <CircleMarker center={[-1.490000, 35.143890]} pathOptions={redOptions} radius={20}>
      <Popup>Masai Mara National Reserve, Narok, Kenya</Popup>
    </CircleMarker>

    <CircleMarker center={[-2.964427 , 37.911115]} pathOptions={redOptions} radius={20}>
      <Popup>Tsavo National Park West: Kenya</Popup>
    </CircleMarker>

    <CircleMarker center={[-1.000000 , 33.000000]} pathOptions={redOptions} radius={20}>
      <Popup>Lake Victoria</Popup>
    </CircleMarker>

    <CircleMarker center={[-0.1000 , 36.1000]} pathOptions={redOptions} radius={20}>
      <Popup>The Great Rift Valley</Popup>
    </CircleMarker>

    <LocationMarker />
  </MapContainer>
  )
}

export default Map;