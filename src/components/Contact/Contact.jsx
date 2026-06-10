import { useState } from 'react';
import { toast } from 'react-toastify';
import { BiSolidUser } from 'react-icons/bi';
import { BiSolidPhone } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useGetState } from '@/redux/useGetState';
import { deleteContact } from '@/redux/contacts/operations';
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalContentComponent from '../ModalContentComponent';
import style from './Contact.module.css';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const { filteredContacts } = useGetState();
  const dispatch = useDispatch();

  const handleOpenModal = id => {
    setSelectedContactId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedContactId(null);
  };

  // открываем модалку подтверждения
  const handleDeleteClick = id => {
    setContactToDelete(id);
    setIsConfirmOpen(true);
  };

  // подтверждаем удаление
  const handleConfirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete));
      setIsConfirmOpen(false);
      setContactToDelete(null);
      toast.error('Contact successfully deleted', { theme: 'colored' });
    }
  };

  // отменяем удаление
  const handleCancelDelete = () => {
    setIsConfirmOpen(false);
    setContactToDelete(null);
  };

  return (
    <>
      {filteredContacts.map(({ id, name, number }) => (
        <Box component="li" className={style.contactItem} key={id}>
          <Box className={style.contactBox}>
            <Box className={style.contactTitleBox}>
              <Typography className={style.contactContent}>
                <BiSolidUser />
                {name}:
              </Typography>
              <Typography className={style.contactContent}>
                <BiSolidPhone />
                {number}
              </Typography>
            </Box>

            <Box className={style.contactButtonBox}>
              <Button
                className={style.contactBtn}
                type="button"
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => handleDeleteClick(id)}
              >
                Delete
              </Button>

              <Button
                className={style.contactBtn}
                variant="outlined"
                onClick={() => handleOpenModal(id)}
              >
                Edit
              </Button>
            </Box>
          </Box>

          {selectedContactId && (
            <ModalContentComponent
              open={isModalOpen}
              onClose={handleCloseModal}
              contactId={selectedContactId}
            />
          )}
        </Box>
      ))}

      {/* Модалка подтверждения удаления */}
      <Dialog open={isConfirmOpen} onClose={handleCancelDelete}>
        <DialogTitle>Confirm deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this contact?</Typography>
        </DialogContent>
        <DialogActions>
          <Button className={style.modalBtn} onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button
            className={style.modalBtn}
            onClick={handleConfirmDelete}
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Contact;
