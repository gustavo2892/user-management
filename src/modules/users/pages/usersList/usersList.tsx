import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';
import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { useState } from "react";

import { Table } from '@/shared/components';
import { endpoints } from "@/shared/api/endpoints";
import { list, remove } from '../../service/users.service';
import type { TUser } from "../../users.types";
import { columns } from "./userList.constants";


export const UsersList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: list
  });
  const [alertInfo, setAlertInfo] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const mutation = useMutation({
    mutationFn: (user: TUser) => remove(user.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      setAlertInfo({
        open: true,
        message: 'Item created successfully!',
        severity: 'success',
      });
    },
    onError: (error) => {
      setAlertInfo({
        open: true,
        message: `Error: ${error.message}`,
        severity: 'error',
      });
    },
  });

  const handleDelete = (user: TUser) => {
    mutation.mutate(user);
  };

  const handleNavigate = (user: TUser) => {
    navigate({
      pathname: `${endpoints.users}/${user.id}`
    });
  }

  const handleCloseAlert = () => {
    setAlertInfo((prev) => ({ ...prev, open: false }));
  };

  return <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
    <h1>Usuários</h1>
    <Table<TUser>
      data={data ?? []}
      columns={columns}
      onDelete={handleDelete}
      onNavigate={handleNavigate}
    />
    <Snackbar
      open={alertInfo.open}
      autoHideDuration={6000}
      onClose={handleCloseAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={handleCloseAlert}
        severity={alertInfo.severity as 'success' | 'error' | 'warning' | 'info'}
        variant="filled"
        sx={{ width: '100%' }}
      >
        <AlertTitle>{alertInfo.severity === 'success' ? 'Success' : 'Error'}</AlertTitle>
        {alertInfo.message}
      </Alert>
    </Snackbar>
  </div>;
};