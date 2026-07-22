/* eslint-disable react-refresh/only-export-components -- router config module, not a component file */
import { createBrowserRouter, Outlet } from 'react-router-dom';

import CandidatesPage from '@/features/candidates/pages/CandidatesPage';
import CategoriesPage from '@/features/categories/pages/CategoriesPage';
import HomePage from '@/features/home/pages/HomePage';
import ResultsPage from '@/features/results/pages/ResultsPage';
import VotePage from '@/features/vote/pages/VotePage';
import Layout from '@/ui/Layout';
import PagePlaceholder from '@/ui/PagePlaceholder';

const RootLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/candidatos', element: <CandidatesPage /> },
      { path: '/categorias', element: <CategoriesPage /> },
      { path: '/votar', element: <VotePage /> },
      { path: '/resultados', element: <ResultsPage /> },
      {
        path: '/acceder',
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
