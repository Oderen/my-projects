import { NavLink } from 'react-router-dom';
import css from './PhonebookPage.module.css';

const PhonebookIntroducerPage = () => {
  return (
    <div className={css.phonebook}>
      <div className={css.phonebook__box}>
        <h1 className={css.phonebook__title}>
          <span>Want to see Phonebook project?</span>
        </h1>
        <NavLink to="/register" className={css.phonebook__link}>
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default PhonebookIntroducerPage;
