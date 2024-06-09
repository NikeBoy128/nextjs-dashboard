'use client';
import React, { useEffect, useState } from 'react';
import { deleteUser, getPaginatedUsers } from './interfaces/api/api';
import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Pagination,
  TextField,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import { FunnelIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Datum } from './interfaces/userlist';
import { SearchModal } from './search';
import FormModal from './formmodal';
import FormDialogEdit from './formeditmodal';
import AlertComponent from './alert';

export default function UserTable() {
  const [data, setData] = useState<Datum[]>([]);
  const [pagination, setPagination] = useState({ page: '1', pageCount: 0 });
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState<Datum>(Object);
  const [reload, setReload] = useState(false);
  const [alert, setAlert] = React.useState<React.ReactNode | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPaginatedUsers({
        order: 'ASC',
        page,
        perPage: 11,
        search: search,
      });
      setData(res.data);
      setPagination(res.pagination);
    };

    fetchData();
  }, [page, search,reload]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleEdit = (user: Datum) => {
    setSelectedUser(user);

  };

  const handleDelete =  async (id: string) => {
    setAlert(null);
    const response=await  deleteUser({ id });
    setReload(!reload);
    setAlert(<AlertComponent message={response.message} code={response.code} />);

  }

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2, width: '80%', margin: 'auto' }}>
      <SearchModal onSearch={setSearch} />
      <FormModal onUserSaved={() => setReload(!reload)}/>
      </Box>
      <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto', marginTop: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '20%' }}>Nombre</TableCell>
              <TableCell sx={{ width: '20%' }} align="right">Apellido</TableCell>
              <TableCell sx={{ width: '30%' }} align="right">Email</TableCell>
              <TableCell sx={{ width: '15%' }} align="right">Rol</TableCell>
              <TableCell sx={{ width: '15%' }} align="right">Status</TableCell>
              <TableCell sx={{ width: '10%' }} align="right">Edit</TableCell>
              <TableCell sx={{ width: '10%' }} align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
              key={row.name}
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 },
                backgroundColor: row.isActive ? 'rgba(0, 128, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.role.name}</TableCell>
              <TableCell align="right">
                {row.isActive ? 'Activo' : 'Inactivo'}
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={() => handleEdit(row)}>
                  
                  <FormDialogEdit user={selectedUser}/>
                </IconButton>
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={() => handleDelete(row.id)}>
                  <TrashIcon style={{ width: 20, height: 20 }} />
                </IconButton>
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={pagination.pageCount}
        page={parseInt(pagination.page)}
        onChange={handleChange}
        sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}
      />
      {alert}
    </Box>
    
  );
}
