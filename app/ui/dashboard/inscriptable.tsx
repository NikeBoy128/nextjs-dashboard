'use client';
import React, { useEffect, useState } from 'react';
import {
  deleteUser,
  getPaginatedUsers,
  getPaginationInscripcions,
} from './interfaces/api/api';
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
import { Datum, InscripcionInterface } from './interfaces/userlist';
import { SearchModal } from './search';
import FormModal from './formmodal';
import FormDialogEdit from './formeditmodal';
import FormInscripcion from './formInscri';

export default function InscripTable() {
  const [data, setData] = useState<InscripcionInterface[]>([]);
  const [pagination, setPagination] = useState({ page: '1', pageCount: 0 });
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedInscripcion, setSelectedInscripcion] =
    useState<InscripcionInterface>(Object);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPaginationInscripcions({
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

  const handleEdit = (inscripcion: InscripcionInterface) => {
    setSelectedInscripcion(inscripcion);
  };

  const handleDelete = async (id: string) => {
    //await deleteUser({ id });
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 2,
          width: '80%',
          margin: 'auto',
        }}
      >
        <SearchModal onSearch={setSearch} />
        <FormInscripcion />
      </Box>
      <TableContainer
        component={Paper}
        sx={{ width: '80%', margin: 'auto', marginTop: 2 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '20%' }}>Nombre</TableCell>
              <TableCell sx={{ width: '20%' }} align="right">
                Apellido
              </TableCell>
              <TableCell sx={{ width: '20%' }} align="right">
                Plan
              </TableCell>
              <TableCell sx={{ width: '20%' }} align="right">
                Fecha Inscripcion
              </TableCell>
              <TableCell sx={{ width: '10%' }} align="right">
                Edit
              </TableCell>
              <TableCell sx={{ width: '10%' }} align="right">
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.user.name}>
                <TableCell component="th" scope="row">
                  {row.user.name}
                </TableCell>
                <TableCell align="right">{row.user.lastName}</TableCell>
                <TableCell align="right">{row.plan.name}</TableCell>

                <TableCell align="right">
                  {new Date(row.registerDate).toLocaleDateString('es-ES', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </TableCell>

                <TableCell align="right">
                  <IconButton onClick={() => handleEdit(row)}></IconButton>
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
    </Box>
  );
}
