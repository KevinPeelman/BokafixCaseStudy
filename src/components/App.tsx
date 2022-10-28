import React, { useState } from 'react';
import LeafletMap from "./LeafletMap";
import { LatLng } from 'leaflet';
import { Paper } from '@mui/material';
import CustomDropzone from './CustomDropzone';
import { CustomForm } from './CustomForm';
import { CURRENT_POSITION } from '../mapconfig';

export const App: React.FC = () => {
   const [center, setCenter] = useState<LatLng>(CURRENT_POSITION)
   return (
      <>
         <h3>Map Project</h3>
         <LeafletMap setCurrentCenter={setCenter} />
         <Paper id="outlined-textfield">Latitude : {Math.round(center?.lat * 100) / 100}, Longitude  : {Math.round(center?.lng * 100) / 100}</Paper>
         <CustomForm />
         <CustomDropzone />
      </>
   )
}