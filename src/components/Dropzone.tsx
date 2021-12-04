import React, {useCallback, useMemo, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {CircularProgress} from "@mui/material";

interface DropzoneProps {

}


export const Dropzone: React.FC<DropzoneProps> = ({}) => {
    const onDrop = (acceptedFiles: File[]) => {
        acceptedFiles.forEach((file) => {
            console.log(file)
        });
    };
    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({onDrop, accept: 'image/png, image/jpg, image/jpeg', multiple: false,
        maxFiles: 1,});

    const dropzoneStyles = () => {
        if(isDragReject){
            return 'dropzone--drag-reject';
        }
        if(isDragAccept){
            return 'dropzone--drag-accept';
        }
    }

    return (
            <div {...getRootProps()} className={`dropzone ${dropzoneStyles()}`}>
                <input {...getInputProps()} />
                {isDragAccept && (<p>All files will be accepted</p>)}
                {isDragReject && (<p>Some files will be rejected</p>)}
                {!isDragActive && (<p>Drop photo here ...</p>)}

            <i className="fas fa-download download-icon" />
            </div>
    );
}