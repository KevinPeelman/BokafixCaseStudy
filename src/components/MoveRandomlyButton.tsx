import { useMap } from "react-leaflet";

interface Props {}

const AddMarkerButton: React.FC<Props> = (props) => {

    const map = useMap();

    const onMoveRandomly = () => {
        map.flyTo({lat:Math.random()*180-90,lng:Math.random()*360-180});
    }

    return <button onClick={onMoveRandomly}>Move randomly</button>
}

export default AddMarkerButton;