import React from 'react';
import { LatLng } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import MoveRandomlyButton from './MoveRandomlyButton';
import MoveToCenterButton from './MoveToCenterButton';
import MapLogger from './MapLogger';
import { CURRENT_POSITION } from '../mapconfig';
import '../css/map.css'

const zoom: number = 7;

interface Properties {
   setCurrentCenter: React.Dispatch<React.SetStateAction<LatLng>>
}

const LeafletMap: React.FC<Properties> = (props) => {
   return (
      <MapContainer id="mapId"
         center={CURRENT_POSITION}
         zoom={zoom}>
         <MoveRandomlyButton />
         <MoveToCenterButton />
         <MapLogger {...props} />
         <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
   )
}

export default LeafletMap;