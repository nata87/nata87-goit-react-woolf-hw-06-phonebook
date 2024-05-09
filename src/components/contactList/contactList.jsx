import { deleteContact } from 'components/store/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(({ contacts }) => contacts.items);
  const filter = useSelector(({ contacts }) => contacts.filter);
  const dispatch = useDispatch();
  const list = list => {
    return list.map(({ name, number, id }) => (
      <li key={id}>
        {name}: {number}
        <button
          style={{ marginLeft: '20px' }}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </li>
    ));
  };
  return (
    <ul>
      {!filter
        ? list(contacts)
        : list(
            contacts.filter(({ name }) => {
              return name.toLowerCase().includes(filter.toLowerCase());
            })
          )}
    </ul>
  );
};

export default ContactList;
