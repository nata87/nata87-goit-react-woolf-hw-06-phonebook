import { setFilter } from 'components/store/contactsSlice';
import styles from '../addContactForm/addContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <>
      <label
        style={{ marginLeft: '20px' }}
        className={styles.label}
        htmlFor="filter"
      >
        Find contacts by name
      </label>
      <input
        style={{ marginLeft: '20px' }}
        id="filter"
        name="filter"
        value={filter}
        onChange={({ target }) => {
          dispatch(setFilter(target.value));
        }}
      />
    </>
  );
};

export default Filter;
