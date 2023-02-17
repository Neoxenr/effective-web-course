// React
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
