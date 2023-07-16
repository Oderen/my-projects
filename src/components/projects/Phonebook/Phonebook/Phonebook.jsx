import PropTypes from 'prop-types';
import css from '../Phonebook.module.css';

export default function Phonebook({ contacts, onDelete }) {
  return (
    <>
      {contacts
        .sort((a, b) => b.id - a.id)
        .map(({ id, name, number }, index) => (
          <li key={id} className={css.ContactList__item}>
            <h3 className={css.Contact__title}>Contact {index + 1}</h3>
            <div className={css.Contact}>
              <p className={css.Contact__text}>
                <span style={{ fontWeight: 700 }}>Name: </span>
                {name}
              </p>
              <p className={css.Contact__text}>
                <span style={{ fontWeight: 700 }}>Phone:</span> {number}
              </p>
              <button
                className={css.Contact__deleteButton}
                type="button"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
    </>
  );
}

Phonebook.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
