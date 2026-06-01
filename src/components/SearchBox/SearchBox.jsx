import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { useGetState } from '@/redux/useGetState';
import { changeFilter } from '@/redux/filterSlice';
import style from './SearchBox.module.css';

const SearchBox = () => {
  const { filter } = useGetState();
  const dispatch = useDispatch();
  const fieldNameId = useId();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={style.searchBox}>
      <label htmlFor={fieldNameId} className={style.label}>
        Find contacts by name
      </label>
      <input
        className={style.field}
        type="text"
        value={filter}
        id={fieldNameId}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
