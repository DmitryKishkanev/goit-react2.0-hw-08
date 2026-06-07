import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useGetState } from '@/redux/useGetState';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import style from './AppBarComponent.module.css';

const AppBarComponent = () => {
  const { isLoggedIn } = useGetState();

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth={false}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 24px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography
              className={style.appBarLogo}
              component={NavLink}
              to="/"
              variant="h4"
            >
              ☎Phonebook
            </Typography>
            <Navigation />
          </Box>

          <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
