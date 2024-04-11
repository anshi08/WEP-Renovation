import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
// import { Container } from '@mui/material'
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

const App = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); 

  return (
    <>
    {/* <Container maxWidth="xl"> */}
    <Header />
    <Outlet />
    {/* <Footer /> */}
    {/* </Container> */}
    </>
  )
}

export default App