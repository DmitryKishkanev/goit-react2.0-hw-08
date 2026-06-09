import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <Box component="main" className={style.main}>
      <Typography variant="h1" className={style.title}>
        404 - Page Not Found
      </Typography>
      <Typography className={style.text}>Такой страницы нет</Typography>
      <Link className={style.link} to={'/'}>
        Back to home
      </Link>
    </Box>
  );
};

export default NotFoundPage;
