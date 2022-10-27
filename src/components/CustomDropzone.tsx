import { Button } from '@mui/material'
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import UploadIcon from '@mui/icons-material/Upload';

export default function MyDropzone() {
  const onDrop = useCallback((acceptedFiles:any)=> {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div id="dragAndDrop" {...getRootProps()}>
        <input {...getInputProps()} />
        <Button id="dragAndDropButton">Browse</Button>
        <p id="dragAndDropText">Upload photo</p>
        <UploadIcon id="dragAndDropIcon"/>
    </div>
  )
}