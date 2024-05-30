import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Select, MenuItem, IconButton } from '@mui/material';
import { FunnelIcon } from '@heroicons/react/24/outline';

interface SearchModalProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ onSearch }) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleOpen} aria-label="filter">
        <FunnelIcon className="w-6 text-gray-600 hover:text-gray-900" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle className="bg-gray-100 text-sm">Buscar datos</DialogTitle>
        <DialogContent className="bg-gray-50 py-2">
          <TextField autoFocus margin="dense"id="search"type="text"fullWidth value={searchTerm}onChange={(e) => setSearchTerm(e.target.value)} variant="outlined" size="small"/>
        </DialogContent>
        <DialogActions className="bg-gray-100 py-1">
          <Button onClick={handleClose} style={{backgroundColor: '#f44336', color: '#ffffff',fontSize: '0.875rem', padding: '4px 8px'}}>Cerrar</Button>
          <Button onClick={handleSearch} style={{backgroundColor: '#4caf50', color: '#ffffff',fontSize: '0.875rem', padding: '4px 8px'}}>Buscar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};