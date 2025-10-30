import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserList from '../views/usersList/userList';
import UserView from '../views/userView/userView';

export const UsersRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<UserList />} />
    <Route path="new" element={<UserView />} />
    <Route
      path=":id"
      element={<UserView />}
    />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

