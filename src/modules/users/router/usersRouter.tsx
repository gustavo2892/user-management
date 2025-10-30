import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  UsersList,
  UserCreate,
  UserUpdate
} from '../pages';

export const UsersRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<UsersList />} />
    <Route path="new" element={<UserCreate />} />
    <Route
      path=":userId"
      element={<UserUpdate />}
    />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

