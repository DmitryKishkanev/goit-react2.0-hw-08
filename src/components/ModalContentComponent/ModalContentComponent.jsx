import { toast } from 'react-toastify';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from '@mui/material';
import { updateContact } from '@/redux/contacts/operations';
import { useGetState } from '@/redux/useGetState.js';
import style from './ModalContentComponent.module.css';

const FeedbackSchema = object().shape({
  name: string().min(3, 'Too Short!').max(50, 'Too Lonf!').required('Required'),
  number: string()
    .min(3, 'Too Short!')
    .max(50, 'Too Lonf!')
    .required('Required'),
});

const ModalContentComponent = ({ onClose, contactId, open }) => {
  const { contacts } = useGetState();
  const dispatch = useDispatch();

  const contact = contacts.find(contact => contact.id === contactId);

  const initialValue = {
    name: contact?.name || '',
    number: contact?.number || '',
  };

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    const isNamePresent = contacts.some(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() &&
        contact.id !== contactId,
    );

    if (isNamePresent) {
      toast.error(`${newContact.name} is already in contacts `, {
        theme: 'colored',
      });
      return;
    }

    dispatch(
      updateContact({
        contactId: contactId,
        contact: newContact,
      }),
    );

    resetForm();
    toast.success('Сontact added successfully', { theme: 'colored' });
    onClose();
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle className={style.modalTitle}>Edit contact</DialogTitle>

        <Formik
          initialValues={initialValue}
          validationSchema={FeedbackSchema}
          onSubmit={onSubmit}
          //    Опция обновления формы при изменении пропсов (если переключать контакты не закрывая модалку)
          // enableReinitialize
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <DialogContent className={style.modalContent}>
                <TextField
                  className={style.modalTextField}
                  margin="dense"
                  label="Name"
                  name="name"
                  fullWidth
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />

                <TextField
                  className={style.modalTextField}
                  margin="dense"
                  label="Number"
                  name="number"
                  fullWidth
                  value={values.number}
                  onChange={handleChange}
                  error={touched.number && Boolean(errors.number)}
                  helperText={touched.number && errors.number}
                />
              </DialogContent>

              <DialogActions>
                <Button
                  className={style.modalButton}
                  variant="outlined"
                  type="button"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  className={style.modalButton}
                  type="submit"
                  variant="contained"
                  disabled={!values.name || !values.number}
                >
                  Save
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  );
};

ModalContentComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  contactId: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ModalContentComponent;
