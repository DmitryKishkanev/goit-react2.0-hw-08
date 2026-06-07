import { useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { useGetState } from '@/redux/useGetState';
import { logOut } from '@/redux/auth/operations';
import style from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useGetState();

  return (
    <Box className={style.userMenuBox}>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: '22px',
          lineHeight: 1.19,
          letterSpacing: '0.03em',
        }}
      >
        Hi, {userName}
      </Typography>
      <Button
        className={style.userMenuBtn}
        variant="outlined"
        color="inherit"
        type="button"
        onClick={() => dispatch(logOut())}
        sx={{
          transition:
            'transform var(--transition-time) var(--transition-type), color var(--transition-time) var(--transition-type),  background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),  border-color var(--transition-time) var(--transition-type)',
          '&:hover': {
            textDecoration: 'none',
            transform: 'scale(1.09)',
            color: 'rgb(82, 38, 0)',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderColor: 'rgb(82, 38, 0)',
          },
          '&:focus': {
            textDecoration: 'none',
            transform: 'scale(1.09)',
            color: 'rgb(82, 38, 0)',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderColor: 'rgb(82, 38, 0)',
          },
        }}
      >
        Log out
      </Button>
    </Box>
  );
};

export default UserMenu;
