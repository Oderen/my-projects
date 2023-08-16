import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import {
  changeImgNavStatus,
  changeMovieNavStatus,
  changePhonebookNavStatus,
} from '../../redux/slices/isNavActive-slice';

const Home = () => {
  const dispatch = useDispatch();

  const isImgNavActive = useSelector(state => state.isNavActive.isImgNavActive);
  const isMovieNavActive = useSelector(
    state => state.isNavActive.isMovieNavActive
  );
  const isPhonebookNavActive = useSelector(
    state => state.isNavActive.isPhonebookNavActive
  );

  const titleChanger = () => {
    let text = 'CHOOSE A PROJECT';
    if (isImgNavActive) {
      text = 'Image Finder';
    } else if (isMovieNavActive) {
      text = 'Movie Finder';
    } else if (isPhonebookNavActive) {
      text = 'Phonebook';
    }
    return text;
  };

  return (
    <div className={css.homeContainer}>
      <div style={{ paddingLeft: 5, paddingRight: 5, paddingTop: 3 }}>
        <h1 className={css.title}>{titleChanger()}</h1>
        <nav className={css.navigation}>
          <ul className={css.navigation__list}>
            <li className={css.navigation__item}>
              <NavLink
                to="/imageFinder"
                className={`${css.NavLink} ${
                  isImgNavActive ? `${css.NavLink__active}` : ``
                }`}
                onClick={() => {
                  dispatch(changeImgNavStatus());
                }}
              >
                Image Finder
              </NavLink>
            </li>
            <li className={css.navigation__item}>
              <NavLink
                to={'/movieFinder'}
                className={`${css.NavLink} ${
                  isMovieNavActive ? `${css.NavLink__active}` : ``
                }`}
                onClick={() => {
                  dispatch(changeMovieNavStatus());
                }}
              >
                Movie Finder
              </NavLink>
            </li>
            <li className={css.navigation__item}>
              <NavLink
                to={'/phonebook'}
                className={`${css.NavLink} ${
                  isPhonebookNavActive ? `${css.NavLink__active}` : ``
                }`}
                onClick={() => {
                  dispatch(changePhonebookNavStatus());
                }}
              >
                Phonebook
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
