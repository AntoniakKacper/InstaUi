import Dialog from '@mui/material/Dialog';
import React, { Dispatch, SetStateAction, FC} from 'react';
import ReactDOM from "react-dom";
import "App.scss";


interface ModalProps {
    open: boolean;
    setOpen:  Dispatch<SetStateAction<boolean>>;
    children: JSX.Element;
}

export const Modal: FC<ModalProps> = ({ open, setOpen, children}) => {
    const handleClose = () => {
        setOpen(false);
    };
    return ReactDOM.createPortal((
      <Dialog
          open={open}
          onClose={handleClose}
          className="modal"
      >
          {children}
      </Dialog>
    ), document.body);
 }