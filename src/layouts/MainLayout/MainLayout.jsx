import React from 'react';
import { Header } from '../../components';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
