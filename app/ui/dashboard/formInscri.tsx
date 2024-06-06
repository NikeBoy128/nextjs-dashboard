'use client';
import React, { useState } from 'react';
import { Box, Button, TextField, FormControl, Select, MenuItem, Typography, Paper } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const FormInscripcion: React.FC = () => {
    const [selectedUser, setSelectedUser] = useState<string>('');
    const [selectedPlan, setSelectedPlan] = useState<string>('');
    const [benefits, setBenefits] = useState<string>('Los beneficios del plan seleccionado se mostrarán aquí.');

    const users = ['Usuario 1', 'Usuario 2', 'Usuario 3'];
    const plans = ['Plan A', 'Plan B', 'Plan C'];

    const handleUserChange = (event: SelectChangeEvent<string>) => {
        setSelectedUser(event.target.value as string);
    };

    const handlePlanChange = (event: SelectChangeEvent<string>) => {
        setSelectedPlan(event.target.value as string);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Paper elevation={3} sx={{ padding: 3, maxWidth: '400px', width: '100%', borderRadius: '10px' }}>
                <Typography variant="h6" gutterBottom align="center">
                    Formulario de Inscripción
                </Typography>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                        Seleccionar Usuario
                    </Typography>
                    <Select
                        value={selectedUser}
                        onChange={handleUserChange}
                        displayEmpty
                    >
                        <MenuItem value="" disabled>Seleccione un usuario</MenuItem>
                        {users.map((user, index) => (
                            <MenuItem key={index} value={user}>{user}</MenuItem>
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
                        <MenuItem value="" disabled>Seleccione un plan</MenuItem>
                        {plans.map((plan, index) => (
                            <MenuItem key={index} value={plan}>{plan}</MenuItem>
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
                        value={benefits}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Box>
                <Box display="flex" justifyContent="center" sx={{ gap: 2 }}>
                    <Button
                        color="primary"
                        variant="contained"
                        style={{
                            backgroundColor: '#4caf50',
                            color: '#ffffff',
                            fontSize: '0.875rem',
                            padding: '8px 16px'
                        }}
                    >
                        Guardar
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default FormInscripcion;

