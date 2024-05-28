import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Select, MenuItem } from '@mui/material';
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
      <FunnelIcon className="w-6" onClick={handleOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Search</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="search"
            label="Search Term"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSearch}>Search</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};