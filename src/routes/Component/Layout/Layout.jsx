import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { useGetState } from '@/redux/useGetState.js';
import AppBarComponent from '../AppBarComponent';
import style from './Layout.module.css';

const Layout = () => {
  const { isLoggedIn } = useGetState();
  const location = useLocation();

  let bgClass;
  if (isLoggedIn) {
    bgClass = style.backgroundLoggedIn;
  } else if (
    location.pathname === '/login' ||
    location.pathname === '/register'
  ) {
    bgClass = style.backgroundAuth;
  } else {
    bgClass = style.backgroundGuest;
  }

  return (
    <Box className={bgClass}>
      <AppBarComponent />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;
