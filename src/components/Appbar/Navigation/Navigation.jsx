import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { resetLinks } from '../../../redux/slices/isNavActive-slice';

export const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLogged);
  return (
    <nav className={css.navigation}>
      <ul className={css.navigation__list}>
        <NavLink
          to="/"
          className={css.navigation__list__item}
          onClick={() => {
            dispatch(resetLinks());
          }}
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={css.navigation__list__item}>
            Phonebook
          </NavLink>
        )}
      </ul>
    </nav>
  );
};
