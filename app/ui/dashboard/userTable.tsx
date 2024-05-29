'use client'
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
} from '@mui/material';
import {
    FunnelIcon,
  } from '@heroicons/react/24/outline';
import { Datum } from './interfaces/userlist';
import { SearchModal } from './search';
import FormModal from './formmodal';

export default function UserTable() {
  const [data, setData] = useState<Datum[]>([]);
  const [pagination, setPagination] = useState({ page: '1', pageCount: 0 });
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const res = await getPaginatedUsers({ order: 'ASC', page, perPage: 11,search:search});
      setData(res.data);
      setPagination(res.pagination);
    };

    fetchData();
  }, [page,search]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };



  return (
    <>
      <SearchModal onSearch={setSearch} />
      <FormModal/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Apellido</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Rol</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.role.name}</TableCell>
                <TableCell align="right">
                  {row.isActive === true ? 'Activo' : 'Inactivo'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    <Pagination
        count={(pagination.pageCount)}
        page={parseInt(pagination.page)}
        onChange={handleChange}
    />
    </>
  );
}