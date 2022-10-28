import { useMap } from "react-leaflet";
import Button from "@mui/material/Button";

interface Props { }

const AddMarkerButton: React.FC<Props> = (props) => {

    const map = useMap();

    const onMoveRandomly = () => {
        map.flyTo({ lat: Math.random() * 180 - 90, lng: Math.random() * 360 - 180 });
    }

    return <Button variant="contained" id="moveRandomlyButton" onClick={onMoveRandomly} >Teleport me to somewhere random</Button>
}

export default AddMarkerButton;