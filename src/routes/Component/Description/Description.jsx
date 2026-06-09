import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import style from './Description.module.css';

const Description = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`..`);
  };

  return (
    <Box className={style.descriptionContainer}>
      <Typography className={style.text}>
        The application is built with functional React components and uses React
        Router for navigation between pages. The core feature is a phonebook
        that allows adding, editing, deleting, and filtering contacts by name.
        State management is organized through slices, asynchronous operations,
        and selectors. In addition to the phonebook functionality, the app
        includes user authentication with registration and login, as well as
        protected routes implemented via custom PrivateRoute and RestrictedRoute
        components. This demonstrates a practical architecture combining React,
        routing, state handling, and authorization in a modern interface.
      </Typography>

      <Button
        className={style.descriptionButton}
        type="button"
        onClick={handleClose}
        variant="outlined"
      >
        Close
      </Button>
    </Box>
  );
};

export default Description;
