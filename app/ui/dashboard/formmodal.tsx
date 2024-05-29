import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CreateUser } from './interfaces/api/api';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    console.log(formJson);

    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Crear Usuario</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="userName"
            name="userName"
            label="Nombre"
            type="string"
            fullWidth
            variant="standard"
            placeholder="Nombre Usuario"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="lastName"
            name="lastName"
            label="Apellido"
            type="string"
            fullWidth
            variant="standard"
            placeholder="Apellido"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Contraseña"
            type="string"
            fullWidth
            variant="standard"
            placeholder="contraseña"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Correo"
            type="email"
            fullWidth
            variant="standard"
            placeholder="Correo"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Guardar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
