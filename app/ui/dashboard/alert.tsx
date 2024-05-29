import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import { AlertResponseInterface } from './interfaces/userlist';
import { AlertTitle, Button } from '@mui/material';

const AlertComponent: React.FC<AlertResponseInterface> = ({ message, code }) => {
  const [open, setOpen] = useState(true);
  const severity = code === 200 || code === 201 ? 'success' : 'error';


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertComponent;