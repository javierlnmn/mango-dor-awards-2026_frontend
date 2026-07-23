import '@/styles/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/router';
import WipPage from '@/modules/landing/pages/WipPage';

/** When set, the site never mounts — only the WIP teaser does. */
const FORCE_WIP = import.meta.env.VITE_FORCE_WIP === 'true';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {FORCE_WIP ? <WipPage /> : <RouterProvider router={router} />}
  </StrictMode>
);
