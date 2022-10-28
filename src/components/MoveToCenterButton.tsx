import { useMap } from "react-leaflet";
import Button from "@mui/material/Button";
import { CURRENT_POSITION } from "../mapconfig";

interface Props { }

const MoveToCenterButton: React.FC<Props> = (props) => {

    const map = useMap();
    let center = CURRENT_POSITION;

    const onMoveToCenter = () => {
        map.flyTo(center);
    }

    return <Button variant="contained" id="moveToCenterButton" onClick={onMoveToCenter} >Bring me back home</Button>
}

export default MoveToCenterButton;