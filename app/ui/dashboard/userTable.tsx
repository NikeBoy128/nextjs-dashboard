'use client';
import React, { useEffect, useState } from 'react';
import { getPaginatedUsers } from './interfaces/api/api';
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
import { FunnelIcon } from '@heroicons/react/24/outline';
import { Datum } from './interfaces/userlist';
import { SearchModal } from './search';
import FormModal from './formmodal';

export default function UserTable() {
  const [data, setData] = useState<Datum[]>([]);
  const [pagination, setPagination] = useState({ page: '1', pageCount: 0 });
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState<Datum | null>(null);

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
  }, [page, search]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleEdit = (user: Datum) => {
    setSelectedUser(user);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2, width: '80%', margin: 'auto' }}>
      <SearchModal onSearch={setSearch} />
      <FormModal user={selectedUser} />
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
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.role.name}</TableCell>
                <TableCell align="right">
                  {row.isActive ? 'Activo' : 'Inactivo'}
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
    </Box>
  );
}
