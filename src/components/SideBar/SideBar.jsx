import { BiImage } from 'react-icons/bi';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { FaPhoneAlt } from 'react-icons/fa';
// import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeSideBar } from 'redux/slices/sideBarSlice';

import css from '../../pages/Home/Home.module.css';

const SideBar = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector(state => state.sideBar.isOpen);

  return (
    <>
      {isSideBarOpen && <div className={css.backdrop}></div>}
      <div
        className={`${css.sideBar} ${isSideBarOpen ? css.isOpen : ''} sideBar`}
      >
        <nav className={css.navigation}>
          <ul className={css.navigation__list}>
            <li className={css.navigation__item}>
              <NavLink
                to="/imageFinder"
                className={css.navigation__NavLink}
                onClick={() => {
                  dispatch(closeSideBar());
                }}
              >
                <BiImage className={css.navigation__icon} />
                <p className={css.navigation__text}>Image Finder</p>
              </NavLink>
            </li>
            <li className={css.navigation__item}>
              <NavLink
                to="/Flopify"
                className={css.navigation__NavLink}
                onClick={() => {
                  dispatch(closeSideBar());
                }}
              >
                <HiDevicePhoneMobile className={css.navigation__icon} />
                <p className={css.navigation__text}>Flopify</p>
              </NavLink>
            </li>
            <li className={css.navigation__item}>
              <NavLink
                to="/phonebook"
                className={css.navigation__NavLink}
                onClick={() => {
                  dispatch(closeSideBar());
                }}
              >
                <FaPhoneAlt className={css.navigation__icon} />
                <p className={css.navigation__text}>Phonebook</p>
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav style={{ marginBottom: 50 }}>
          <ul className={css.navigation__authList}>
            <li className={css.navigation__authItem}>
              <NavLink
                to="/register"
                className={css.navigation__NavLink}
                onClick={() => {
                  dispatch(closeSideBar());
                }}
              >
                <p className={css.navigation__text}>Sign Up</p>
              </NavLink>
            </li>
            <li className={css.navigation__authItem}>
              <NavLink
                to="/login"
                className={css.navigation__NavLink}
                onClick={() => {
                  dispatch(closeSideBar());
                }}
              >
                <p className={css.navigation__text}>Login</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
