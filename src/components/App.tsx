import { Paper, TextareaAutosize, TextField } from '@mui/material';
import { LatLng } from 'leaflet';
import React, { useState } from 'react';
import { DEFAULT_CENTER } from '../mapconfig';
import CustomDropzone from './CustomDropzone';
import { CustomForm } from './CustomForm';
import LeafletMap from "./LeafletMap";

export const App:React.FC = () => {
   const [center, setCenter] = useState<LatLng>(DEFAULT_CENTER)
   
   return (
      <>
         <h3>Map Project</h3>
         <LeafletMap setCurrentCenter={setCenter}/>
         <Paper id="outlined-textfield">Latitude : {Math.round(center?.lat * 100 ) / 100}, Longitude  : {Math.round(center?.lng * 100 ) / 100}</Paper>
         <CustomForm />
         <CustomDropzone />
      </>
   )
}