import React, { useEffect, useState } from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText, ListItemIcon, Checkbox, IconButton } from '@mui/material';
import { BackwardIcon } from '@heroicons/react/24/outline';
import { BenefitInterface } from './interfaces/userlist';
import { addBenefit, deleteBenefit, getBenefits } from './interfaces/api/api';
import AlertComponent from './alert';

const Modalcheck = ({id,name}:{id:string,name:string}) => {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [checkboxOptions, setCheckboxOptions] = useState<BenefitInterface[]>([])
  const [alert,setAlert]=useState<React.ReactNode | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await  getBenefits({id});
      setCheckboxOptions(response.data);
    };
    fetchData();
  }, [id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckboxChange = async (id: string,planId:string) => {
    setAlert(null);
    setCheckboxOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, status: !option.status } : option
      )
    );

    const option = checkboxOptions.find(option => option.id === id);
    if (option) {
      if (option.status) {
        
        const response =await deleteBenefit({planId:planId,benefitId:id});
        setAlert(<AlertComponent message={response.message} code={response.code} />);

      } else {
        
        const responseDelete=addBenefit({planId:parseInt(planId),benefitId:parseInt(id)});
        setAlert(<AlertComponent message={(await responseDelete).message} code={(await responseDelete).code} />);
      }
    }
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
            backgroundColor: 'green', 
            color: 'green', 
            '&:hover': { backgroundColor: 'green', color:'white' },
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
          Configuración de { <span>{name}</span>}
          <IconButton 
            aria-label="close" 
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}>
            <BackwardIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <List>
            {checkboxOptions.map((option) => (
              <ListItem key={option.id} disablePadding onClick={() => handlePlanSelection(option.description)}>
                <ListItemIcon>
                  <Checkbox 
                    checked={option.status} 
                    onChange={() => handleCheckboxChange(option.id,id)} 
                  />
                </ListItemIcon>
                <ListItemText primary={option.description} />
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
      {alert}
    </React.Fragment>
  );
};

export default Modalcheck;