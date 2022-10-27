import * as React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { LatLng, LatLngTuple, LeafletEvent } from 'leaflet';
import MoveRandomlyButton from './MoveRandomlyButton';
import MoveToCenterButton from './MoveToCenterButton';
import MapLogger from './MapLogger';
import { DEFAULT_CENTER } from '../mapconfig';

const zoom:number = 7;

interface Properties {
   setCurrentCenter: React.Dispatch<React.SetStateAction<LatLng>>
}

const LeafletMap:React.FC<Properties> = (props) => {
   return (
    <MapContainer id="mapId"
    center={DEFAULT_CENTER}
    zoom={zoom}>
      <MoveRandomlyButton />
      <MoveToCenterButton />
      <MapLogger {...props}/>
<TileLayer
   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
</MapContainer>
   )
}

export default LeafletMap;