import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiImage } from 'react-icons/bi';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { FaPhoneAlt } from 'react-icons/fa';
import { closeSideBar } from 'redux/slices/sideBarSlice';

import css from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.homeContainer}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <div className={css.mainContent}>
        <div className={css.projectInfo}>
          <div className={css.projectInfo__innerContainer}>
            <h2 className={css.projectInfo__title}>Projects</h2>
            <ul className={css.projectInfo__list}>
              <li className={css.projectInfo__item}>
                <NavLink
                  to="/imageFinder"
                  className={css.projectInfo__NavLink}
                  onClick={() => dispatch(closeSideBar())}
                >
                  <BiImage className={css.navigation__icon} />
                  <p className={css.navigation__text}>Image Finder</p>
                </NavLink>
              </li>
              <li className={css.projectInfo__item}>
                <NavLink
                  to="/Flopify"
                  className={css.projectInfo__NavLink}
                  onClick={() => dispatch(closeSideBar())}
                >
                  <HiDevicePhoneMobile className={css.navigation__icon} />
                  <p className={css.navigation__text}>Flopify</p>
                </NavLink>
              </li>
              <li className={css.projectInfo__item}>
                <NavLink
                  to="/phonebook"
                  className={css.projectInfo__NavLink}
                  onClick={() => dispatch(closeSideBar())}
                >
                  <FaPhoneAlt className={css.navigation__icon} />
                  <p className={css.navigation__text}>Phonebook</p>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={css.introduction}>
            <h1 className={css.introduction__title}>
              Welcome to my Web Portfolio!
            </h1>

            <p className={css.introduction__text}>
              This portfolio showcase projects that highlight my technical
              skills.
            </p>

            <p className={css.introduction__text}>
              While focusing on technical skills, the current design prioritizes
              functionality over looks. Right now, the site is a starting point
              that will be improved with future changes.
            </p>

            <p className={css.introduction__text}>
              Thank you for visiting and considering my works!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
