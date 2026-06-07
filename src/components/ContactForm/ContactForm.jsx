import { Formik, Form } from 'formik';
import { Box, Typography, TextField, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { useGetState } from '@/redux/useGetState';
import { addContact } from '@/redux/contacts/operations';
import style from './ContactForm.module.css';

const FeedbackSchema = object().shape({
  name: string().min(3, 'Too Short!').max(50, 'Too Lonf!').required('Required'),
  number: string()
    .min(3, 'Too Short!')
    .max(50, 'Too Lonf!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading } = useGetState();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    const isNamePresent = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isNamePresent) {
      toast.error(`${newContact.name} is already in contacts `, {
        theme: 'colored',
      });
      resetForm();
      return;
    }

    dispatch(addContact(newContact));
    resetForm();
    toast.success('Сontact added successfully', { theme: 'colored' });
  };

  return (
    <Box className={style.contactFormWrapper}>
      <Typography className={style.contactFormTitle} variant="h5">
        Add a new contact
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form className={style.form}>
            <Box className={style.contactFormBox}>
              <TextField
                className={style.contactFormTextField}
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                sx={{
                  borderRadius: '4px',
                  backgroundColor: 'white',
                  transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  '&:focus': {
                    transform: 'scale(1.05)',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none',
                    },
                    '&:hover fieldset': {
                      border: 'none',
                    },
                    '& .MuiInputBase-input': {
                      padding: '12px 14px',
                      fontSize: '1.2rem', // увеличивает шрифт текста внутри поля
                    },
                    '&.Mui-focused fieldset': {
                      border: 'none',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(0, 0, 0, 0.5)',
                    fontSize: '1.1rem',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'rgba(0, 0, 0, 0.5)',
                    fontSize: '1.5rem',
                  },
                }}
              />

              <TextField
                className={style.contactFormTextField}
                label="Number"
                name="number"
                type="tel"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.number && Boolean(errors.number)}
                helperText={touched.number && errors.number}
                sx={{
                  borderRadius: '4px',
                  backgroundColor: 'white',
                  transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  '&:focus': {
                    transform: 'scale(1.05)',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none',
                    },
                    '&:hover fieldset': {
                      border: 'none',
                    },
                    '& .MuiInputBase-input': {
                      padding: '12px 14px',
                      fontSize: '1.2rem', // увеличивает шрифт текста внутри поля
                    },
                    '&.Mui-focused fieldset': {
                      border: 'none',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(0, 0, 0, 0.5)',
                    fontSize: '1.1rem',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'rgba(0, 0, 0, 0.5)',
                    fontSize: '1.5rem',
                  },
                }}
              />

              <Button
                className={style.contactFormBacBtn}
                variant="outlined"
                type="submit"
                disabled={!values.name || !values.number || isLoading}
                sx={{
                  margin: '0 auto',
                  color: 'white',
                  borderColor: 'white',
                  transition:
                    ' transform 250ms cubic-bezier(0.4, 0, 0.2, 1),  color 250ms cubic-bezier(0.4, 0, 0.2, 1),  border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'scale(1.09)',
                    borderColor: 'rgb(82, 38, 0)',
                    color: 'rgb(82, 38, 0)',
                  },
                }}
              >
                {isLoading && '☎'} Add
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      <ToastContainer position="bottom-center" autoClose={5000} />
    </Box>
  );
};

export default ContactForm;
