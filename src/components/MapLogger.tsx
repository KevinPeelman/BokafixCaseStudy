import { useMapEvents } from "react-leaflet";
import { LatLng, LeafletEvent } from "leaflet";

interface Properties {
    setCurrentCenter: React.Dispatch<React.SetStateAction<LatLng>>
}

const MapLogger: React.FC<Properties> = ({ setCurrentCenter }) => {
    useMapEvents({ move: (e: LeafletEvent) => { setCurrentCenter(e.target.getCenter()) } });
    return null;
}

export default MapLogger;