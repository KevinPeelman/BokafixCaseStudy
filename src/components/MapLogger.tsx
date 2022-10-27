import { LatLng, LeafletEvent } from "leaflet";
import {  useState } from "react";
import {  useMapEvents } from "react-leaflet";

interface Properties {
    setCurrentCenter: React.Dispatch<React.SetStateAction<LatLng>>
 }

const MapLogger: React.FC<Properties> = ({setCurrentCenter}) => {
    const {} = useMapEvents({move:(e: LeafletEvent)=>{setCurrentCenter(e.target.getCenter())}});
    
    return null;
}

export default MapLogger;