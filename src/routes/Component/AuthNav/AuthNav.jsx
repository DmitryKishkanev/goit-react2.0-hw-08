import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import style from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <Box className={style.authNavBox}>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? `${style.authNavButton} ${style.active}`
            : style.authNavButton
        }
      >
        Log in
      </NavLink>

      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive
            ? `${style.authNavButton} ${style.active}`
            : style.authNavButton
        }
      >
        Sign up
      </NavLink>
    </Box>
  );
};

export default AuthNav;
