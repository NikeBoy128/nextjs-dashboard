import React, { useState } from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText, ListItemIcon, Checkbox, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Modalcheck = () => {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [checkboxOptions, setCheckboxOptions] = useState([
    { id: 1, name: 'Descuentos en productos o servicios relacionados con la salud y el bienestar', is_checked: false },
    { id: 2, name: 'Yoga', is_checked: false },
    { id: 3, name: 'Pesas', is_checked: false },
    { id: 4, name: 'CrossFit', is_checked: false },
    { id: 5, name: 'Pilates', is_checked: false },
    { id: 6, name: 'Boxeo', is_checked: false },
    { id: 7, name: 'Zumba', is_checked: false },
    { id: 8, name: 'Ciclismo', is_checked: false },
    { id: 9, name: 'Natación', is_checked: false },
    { id: 10, name: 'HIIT', is_checked: false },
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckboxChange = (id: number) => {
    setCheckboxOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, is_checked: !option.is_checked } : option
      )
    );
  };

  const handlePlanSelection = (name: string) => {
    setSelectedPlan(name);
  };

  return (
    <React.Fragment>
      <Box textAlign="center" my={2}>
      <Button 
        variant="contained" 
        onClick={handleClickOpen} 
        sx={{
            backgroundColor: '#4caf50', 
            color: '#ffffff', 
            '&:hover': { backgroundColor: '#388e3c' },
        }}>
        Seleccionar 
        </Button>
      </Box>
      <Dialog 
        open={open} 
        onClose={handleClose} 
        PaperProps={{
          component: 'form', 
          sx: { padding: 2, maxWidth: '500px', borderRadius: '10px' },
        }}>
        <DialogTitle> 
          Configuración de {selectedPlan && <span>{selectedPlan}</span>}
          <IconButton 
            aria-label="close" 
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <List>
            {checkboxOptions.map((option) => (
              <ListItem key={option.id} disablePadding onClick={() => handlePlanSelection(option.name)}>
                <ListItemIcon>
                  <Checkbox 
                    checked={option.is_checked} 
                    onChange={() => handleCheckboxChange(option.id)} 
                  />
                </ListItemIcon>
                <ListItemText primary={option.name} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleClose} 
            style={{
              backgroundColor: '#f44336', 
              color: '#ffffff',
              fontSize: '0.875rem', 
              padding: '4px 8px'
            }}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Modalcheck;


