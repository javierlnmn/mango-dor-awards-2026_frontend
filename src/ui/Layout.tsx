import { type ReactNode } from 'react';

import Background from '@/ui/Background';
import Sidebar from '@/ui/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

/** App shell: fixed backdrop + sidebar, with page content offset for the sidebar. */
const Layout = ({ children }: LayoutProps) => (
  <div className="viewfinder relative min-h-screen w-full overflow-x-hidden text-white">
    <Background />
    <Sidebar />
    <main className="relative md:pl-64">{children}</main>
  </div>
);

export default Layout;
