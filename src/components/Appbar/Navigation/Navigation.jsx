import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { closeSideBar } from '../../../redux/slices/sideBarSlice';
import { toggleSideBar } from '../../../redux/slices/sideBarSlice';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
// import { BsFillPersonFill } from 'react-icons/bs';

export const Navigation = () => {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector(state => state.sideBar.isOpen);

  useEffect(() => {
    if (isSideBarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
  }, [isSideBarOpen]);

  return (
    <nav className={css.navigation}>
      <ul className={css.navigation__list}>
        <li className={css.navigation__item}>
          <button
            className={css.navigation__button}
            onClick={() => {
              dispatch(toggleSideBar());
            }}
          >
            {isSideBarOpen ? (
              <IoMdClose className={css.navigation__icon} />
            ) : (
              <AiOutlineMenu className={css.navigation__icon} />
            )}
          </button>
        </li>

        <li className={css.navigation__item}>
          <NavLink
            to="/"
            className={css.navigation__NavLink}
            onClick={() => {
              dispatch(closeSideBar());
            }}
          >
            My Portfolio
          </NavLink>
        </li>

        <li className={css.navigation__item}>
          <NavLink
            to="/"
            className={css.navigation__NavLink}
            onClick={() => {
              dispatch(closeSideBar());
            }}
          >
            <button className={css.navigation__button}>
              <AiFillHome className={css.navigation__icon} />
            </button>
          </NavLink>
        </li>

        <li className={css.navigation__deskopItem}>
          <button
            style={{
              wudth: 50,
              height: 50,
              border: 'none',
              backgroundColor: 'transparent',

              marginRight: 50,
            }}
            onClick={() => {
              dispatch(toggleSideBar());
            }}
          >
            {isSideBarOpen ? (
              <IoMdClose className={css.navigation__icon} />
            ) : (
              <AiOutlineMenu className={css.navigation__icon} />
            )}
          </button>
          <NavLink
            to="/"
            className={css.navigation__NavLink}
            onClick={() => {
              dispatch(closeSideBar());
            }}
          >
            My Portfolio
          </NavLink>
          <NavLink
            to="/"
            className={css.navigation__NavLink}
            onClick={() => {
              dispatch(closeSideBar());
            }}
          >
            <button
              style={{
                wudth: 50,
                height: 50,
                border: 'none',
                backgroundColor: 'transparent',

                marginLeft: 20,
              }}
            >
              <AiFillHome className={css.navigation__icon} />
            </button>
          </NavLink>
        </li>

        {/* <li className={css.navigation__deskopItem}>
          <NavLink
            to="/"
            className={css.navigation__NavLink}
            onClick={() => {
              dispatch(closeSideBar());
            }}
          >
            Phonebook
          </NavLink>
          <NavLink
            to="/"
            className={css.navigation__NavLink}
            onClick={() => {
              dispatch(closeSideBar());
            }}
          >
            <button
              style={{
                wudth: 50,
                height: 50,
                border: 'none',
                backgroundColor: 'transparent',

                marginLeft: 20,
              }}
            >
              <AiFillHome className={css.navigation__icon} />
            </button>
          </NavLink>
        </li> */}

        {/* <li className={css.navigation__deskopItem}>
          <button
            style={{
              wudth: 50,
              height: 50,
              border: 'none',
              backgroundColor: 'transparent',

              marginLeft: 20,
            }}
          >
            <BsFillPersonFill className={css.navigation__icon} />
          </button>
        </li> */}
      </ul>
    </nav>
  );
};
