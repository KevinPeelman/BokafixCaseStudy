import Button from "@mui/material/Button";
import { useMap } from "react-leaflet";

interface Props {}

const MoveToCenterButton: React.FC<Props> = (props) => {

    const map = useMap();
    let center = {lat:59,lng:15};

    navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
            center = {lat:position.coords.latitude, lng:position.coords.longitude};
        }
      );

    const onMoveToCenter = () => {
        map.flyTo(center);
    }

    return <Button variant="contained" id="moveToCenterButton"  onClick={onMoveToCenter} >Bring me back home</Button>
}

export default MoveToCenterButton;