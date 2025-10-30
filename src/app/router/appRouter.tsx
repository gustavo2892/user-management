import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Loading } from '@/shared/components';

const LazyUsersModule = React.lazy(
  () => import('../../modules/users/UsersModule')
);

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="users" replace />}
      />

      <Route
        path="users/*"
        element={
          <Suspense
            fallback={
              <Loading />
            }
          >
            <LazyUsersModule />
          </Suspense>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

