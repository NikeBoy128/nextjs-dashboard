'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { Datum, PlanesInterface } from './interfaces/userlist';
import {
  getOnlyPlanBenefits,
  getPaginatedUsers,
  getPlans,
} from './interfaces/api/api';
const FormInscripcion: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [dataUsers, setDataUsers] = useState<Datum[]>([]);
  const [dataPlans, setDataPlans] = useState<PlanesInterface[]>([]);
  const [dataBenefits, setDataBenefits] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [benefits, setBenefits] = useState<string>();
  useEffect(() => {
    const fetchData = async () => {
      const resUsers = await getPaginatedUsers({
        order: 'ASC',
        page: 1,
        perPage: 11,
        search: '',
      });

      const resPlans = await getPlans();
      if (selectedPlan) {
        const res = await getOnlyPlanBenefits({ id: selectedPlan });
        const benefits = res.data
          .map((benefit: { description: string }) => benefit.description)
          .join(', ');
        setBenefits(benefits);
      }
      setDataUsers(resUsers.data);
      setDataPlans(resPlans.data);
    };

    fetchData();
  }, [selectedPlan]);

  const handleUserChange = (event: SelectChangeEvent<string>) => {
    setSelectedUser(event.target.value as string);
  };

  const handlePlanChange = (event: SelectChangeEvent<string>) => {
    setSelectedPlan(event.target.value as string);
  };

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
    formJson.userId = selectedUser;
    formJson.planId = selectedPlan;
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Agregar Inscripcion
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        
        }}
      >
        <DialogTitle>Formulario de Inscripción</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Seleccionar Usuario
            </Typography>
            <Select
              value={selectedUser}
              onChange={handleUserChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Seleccione un usuario
              </MenuItem>
              {dataUsers.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name} {user.lastName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Seleccionar Plan
            </Typography>
            <Select
              value={selectedPlan}
              onChange={handlePlanChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Seleccione un plan
              </MenuItem>
              {dataPlans.map((plan) => (
                <MenuItem key={plan.id} value={plan.id}>
                  {plan.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Beneficios
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              InputProps={{
                readOnly: true,
              }}
              defaultValue={benefits}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleClose}
            color="primary"
            variant="contained"
            style={{
              backgroundColor: '#4caf50',
              color: '#ffffff',
              fontSize: '0.875rem',
              padding: '8px 16px',
            }}
            type="submit"
            
          >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormInscripcion;