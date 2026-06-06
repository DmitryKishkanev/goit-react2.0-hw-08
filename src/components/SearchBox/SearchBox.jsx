import { useDispatch } from 'react-redux';
import { useGetState } from '@/redux/useGetState';
import { changeFilter } from '@/redux/filters/slice';
import { TextField } from '@mui/material';
import style from './SearchBox.module.css';

const SearchBox = () => {
  const { filter } = useGetState();
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <TextField
      className={style.filterTextField}
      label="Find contacts by name"
      name="filter"
      value={filter}
      onChange={handleChange}
      sx={{
        '& .MuiInputLabel-root': {
          color: 'rgba(82, 38, 0, 0.5)',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'rgba(82, 38, 0, 0.5)',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgb(82, 38, 0)',
          },
          '&:hover fieldset': {
            borderColor: 'rgb(82, 38, 0)',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'rgb(82, 38, 0)',
          },
        },
      }}
    />
  );
};

export default SearchBox;
