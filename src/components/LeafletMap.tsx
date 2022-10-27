import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import MoveRandomlyButton from './MoveRandomlyButton';
import MoveToCenterButton from './MoveToCenterButton';

const defaultLatLng: LatLngTuple = [59, 15];
const zoom:number = 7;

const LeafletMap:React.FC = () => {
   return (
    <MapContainer id="mapId"
    center={defaultLatLng}
    zoom={zoom}>
      <MoveRandomlyButton />
      <MoveToCenterButton />
<TileLayer
   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
</MapContainer>
   )
}

export default LeafletMap;