import { NavLink } from 'react-router-dom';
import css from './PhonebookPage.module.css';
import style from '../ImageFinder/ImageFinder.module.css';

const PhonebookIntroducerPage = () => {
  return (
    <div className={css.phonebook}>
      <h2 className={style.title}>Phonebook</h2>
      <h3 className={style.description_title}>Project details:</h3>
      <p className={style.description__name}>
        <strong>What is it? </strong>Web application for creating contacts
      </p>
      <h4
        style={{
          margin: 0,
          marginBottom: 20,
          textAlign: 'center',
        }}
      >
        Features:
      </h4>
      <ul className={css.description__list}>
        <li className={style.description__item}>REST API</li>
        <li className={style.description__item}>Own backend</li>
        <li className={style.description__item}>Registration via email</li>
        <li className={style.description__item}>React</li>
        <li className={style.description__item}>React Redux</li>
        <li className={style.description__item}>Responsive/Adaptive design</li>
      </ul>
      <div className={css.phonebook__box}>
        <h1 className={css.phonebook__title}>
          <span>Want to see Phonebook project?</span>
        </h1>
        <p className={css.phonebook__text}>
          You need to register to see a full version of the project
        </p>
        <NavLink to="/register" className={css.phonebook__link}>
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default PhonebookIntroducerPage;
