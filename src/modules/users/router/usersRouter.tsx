import type { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  UsersList,
} from '../pages';

export const UsersRouter: FC = () => (
  <Routes>
    <Route path="/" element={<UsersList />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

