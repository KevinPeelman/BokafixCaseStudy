import { TextField } from '@mui/material';
import React from 'react';

export const CustomForm:React.FC = () => {
   return (
    <><form id="form">
        <textarea id="descriptionTextField" name="descriptionTextField" placeholder="Description" rows={3}/>
        <input id="emailTextField" name="emailTextField" placeholder="Email"/>
    </form></>
   )
}

