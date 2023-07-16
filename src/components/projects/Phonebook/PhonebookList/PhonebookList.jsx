import Contact from '../Phonebook/Phonebook';
import PropTypes from 'prop-types';
import css from '../Phonebook.module.css';

export default function Phonebook({ contacts, onDelete }) {
  return (
    <ul className={css.ContactList}>
      <Contact key={contacts.id} contacts={contacts} onDelete={onDelete} />
    </ul>
  );
}

Phonebook.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
