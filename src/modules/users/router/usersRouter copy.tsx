import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Loading } from '@/shared/components';

const UserList = React.lazy(() => import('../views/usersList/userList'));
const UserView = React.lazy(() => import('../views/userView/userView'));

export const UsersRouter: React.FC = () => (
  <Routes>
    <Suspense fallback={<Loading />}>
      <Route path="/" element={<UserList />} />
      <Route path="new" element={<UserView />} />
      <Route
        path=":id"
        element={<UserView />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Suspense>
  </Routes>
);

