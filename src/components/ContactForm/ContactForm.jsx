import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { useGetState } from '@/redux/useGetState';
import { addContact } from '@/redux/contactsOps';
import style from './ContactForm.module.css';

const FeedbackSchema = object().shape({
  name: string().min(3, 'Too Short!').max(50, 'Too Lonf!').required('Required'),
  phone: string()
    .min(3, 'Too Short!')
    .max(50, 'Too Lonf!')
    .required('Required'),
});

const initialValues = {
  name: '',
  phone: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading } = useGetState();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      phone: values.phone,
    };

    const isNamePresent = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isNamePresent) {
      alert(`"${newContact.name}" is already in contacts `);
      return;
    }

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={style.form}>
        <div className={style.fieldBox}>
          <label className={style.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={style.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            className={style.errorMessage}
            name="name"
            component="span"
          />
        </div>

        <div className={style.fieldBox}>
          <label className={style.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={style.field}
            type="tel"
            name="phone"
            id={numberFieldId}
          />
          <ErrorMessage
            className={style.errorMessage}
            name="phone"
            component="span"
          />
        </div>

        <button className={style.formButton} type="submit" disabled={isLoading}>
          {isLoading && '☎'} Add
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
