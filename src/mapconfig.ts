import { LatLng } from "leaflet";

export let CURRENT_POSITION: LatLng = new LatLng(59, 15);

navigator.geolocation.getCurrentPosition(
    (position: GeolocationPosition) => {
        CURRENT_POSITION = new LatLng(position.coords.latitude, position.coords.longitude);
    }
);