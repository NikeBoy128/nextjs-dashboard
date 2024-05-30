import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { CreateUser, getRoles } from './interfaces/api/api';
import { Datum, UserFormInterface, getRolesInterface } from './interfaces/userlist';
import AlertComponent from './alert';
import {Box,IconButton,} from '@mui/material';

export default function FormDialog( {user}: {user: Datum | null}) {
  const userEdit= user===null? {name: '', lastName: '', email: '', password: ''}: user;
 
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
      <Box textAlign="center" my={2}>
        <Button variant="contained" onClick={handleClickOpen} sx={{background: '#1976d2', color: 'blue', '&:hover': {background: 'white', },}}>Crear</Button>
      </Box>
      <Dialog open={open} onClose={handleClose} PaperProps={{component: 'form', onSubmit: handleSubmit, sx: { padding: 2, maxWidth: '400px', borderRadius: '10px' }, }}>
        <DialogTitle> Crear Usuario y/o Editar
          <IconButton aria-label="close" onClick={handleClose}sx={{position: 'absolute',right: 8,top: 8,color: (theme) => theme.palette.grey[500],}}></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <TextField autoFocus required margin="dense" id="userName"name="userName" type="text" fullWidth variant="outlined" placeholder="Nombre Usuario" size="small" sx={{ mb: 2 }}/>
          <TextField required margin="dense" id="lastName" name="lastName" type="text"  fullWidth  variant="outlined" placeholder="Apellido" size="small" sx={{ mb: 2 }}/>
          <TextField required margin="dense" id="password" name="password" type="password" fullWidth variant="outlined" placeholder="Contraseña" size="small" sx={{ mb: 2 }}/>
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }} size="small">
            <TextField required margin="dense" id="email" name="email" type="email" fullWidth variant="outlined"placeholder="Correo"size="small" sx={{ mb: 2 }}/>
            <Select labelId="role-label" id="role-select" value={selectedId} onChange={(event) => setSelectedId(event.target.value)} size="small">
              {data.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{backgroundColor: '#f44336', color: '#ffffff',fontSize: '0.875rem', padding: '4px 8px'}}>Cerrar</Button>
          <Button type="submit" color="primary" variant="contained" style={{backgroundColor: '#4caf50', color: '#ffffff',fontSize: '0.875rem', padding: '4px 8px'}}>Guardar</Button>
        </DialogActions>
      </Dialog>
      {alert}
    </React.Fragment>
  );
}