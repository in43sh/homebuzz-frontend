import { ReactNode } from 'react';
import Header from '../Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-grow">{children}</main>
  </div>
);

export default MainLayout;
