import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const RootLayout = () => {
  return (
    <div className='root-layout'>
        <Header/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout