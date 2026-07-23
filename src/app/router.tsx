import { createBrowserRouter, Outlet } from 'react-router-dom';

import CandidatesPage from '@/modules/candidates/pages/CandidatesPage';
import CategoriesPage from '@/modules/categories/pages/CategoriesPage';
import HomePage from '@/modules/landing/pages/HomePage';
import Layout from '@/ui/Layout';
import PagePlaceholder from '@/ui/PagePlaceholder';

export const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/candidates', element: <CandidatesPage /> },
      { path: '/categories', element: <CategoriesPage /> },
      {
        path: '/access',
        element: (
          <PagePlaceholder
            label="Acceso · Cuenta"
            title="Acceder"
            description="El registro y el inicio de sesión abrirán pronto."
          />
        ),
      },
      {
        path: '*',
        element: (
          <PagePlaceholder
            label="Error · 404"
            title="Señal perdida"
            description="Esta página no existe o aún no está sintonizada."
          />
        ),
      },
    ],
  },
]);
