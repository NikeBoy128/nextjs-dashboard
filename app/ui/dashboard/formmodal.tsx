import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { CreateUser, getRoles } from './interfaces/api/api';
import { Datum, UserFormInterface, getRolesInterface } from './interfaces/userlist';
import AlertComponent from './alert';

export default function FormDialog( {user}: {user: Datum | null}) {
  console.log(user)
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState('');
  const [data, setData] = React.useState<getRolesInterface[]>([]);
  const [alert, setAlert] = React.useState<React.ReactNode | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getRoles();
      setData(response.data);
    };
  
    fetchData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setAlert(null);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append('roleId', selectedId);
    const formJson = Object.fromEntries((formData as any).entries()) as UserFormInterface
    const response= await CreateUser(formJson)
    setAlert(null)
    handleClose();
    setAlert(<AlertComponent message={response.message} code={response.code} />);

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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Rol</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedId}
              onChange={(event) => setSelectedId(event.target.value)}
            >
              {data.map((item) => (
                <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Guardar</Button>
        </DialogActions>
      </Dialog>
      {alert}
    </React.Fragment>
  );
}