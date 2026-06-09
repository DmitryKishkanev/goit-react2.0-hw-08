import { NavLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { useGetState } from '@/redux/useGetState';
import style from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useGetState();

  return (
    <>
      <Box component="ul" className={style.headerList}>
        <Box component="li" className={style.headerItem}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${style.headerLink} ${style.active}`
                : style.headerLink
            }
            to="/"
          >
            Home
          </NavLink>
        </Box>

        {isLoggedIn && (
          <Box component="li" className={style.headerItem}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${style.headerLink} ${style.active}`
                  : style.headerLink
              }
              to="phonebook"
            >
              Phonebook
            </NavLink>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Navigation;
