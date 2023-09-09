import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
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

      {/* <div
        style={{
          width: '100%',
          height: 200,
          backgroundColor: 'tomato',
        }}
      ></div>
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          borderColor: 'red',
          borderWidth: 2,
          borderStyle: 'solid',
        }}
      >
        <h2>List of projects</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ul
            style={{
              display: 'flex',
              gap: 30,
              padding: 0,
              listStyle: 'none',
            }}
          >
            <li>
              <div className={css.v2_div1}>
                <img
                  src={require('../../images/gt.png')}
                  alt="a"
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: 8,
                  }}
                />
                <div className={css.overlay}></div>
              </div>
              <div className={css.a}>
                <h3
                  style={{
                    color: 'white',
                    margin: 0,
                    fontFamily: 'Roboto',
                    fontSize: 24,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    letterSpacing: 1.08,
                  }}
                >
                  Goose Track
                </h3>
                <p
                  style={{
                    color: 'black',
                    fontFamily: 'Roboto',
                    fontSize: 18,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    letterSpacing: 1.08,
                  }}
                >
                  Web application for managing tasks
                </p>
              </div>
            </li>
            <li>
              <div className={css.v2_div1}>
                <img
                  src={require('../../images/filmoteka.png')}
                  alt="a"
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: 8,
                  }}
                />
                <div className={css.overlay}></div>
              </div>
              <div className={css.a}>
                <h3
                  style={{
                    color: 'white',
                    margin: 0,
                    fontFamily: 'Roboto',
                    fontSize: 24,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    letterSpacing: 1.08,
                  }}
                >
                  Filmoteka
                </h3>
                <p
                  style={{
                    color: 'black',
                    fontFamily: 'Roboto',
                    fontSize: 18,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    letterSpacing: 1.08,
                  }}
                >
                  Web application for chosing a movie
                </p>
              </div>
            </li>
            <li>
              <div className={css.v2_div1}>
                <img
                  src={require('../../images/iceCream.png')}
                  alt="a"
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: 8,
                  }}
                />
                <div className={css.overlay}></div>
              </div>
              <div className={css.a}>
                <h3
                  style={{
                    color: 'white',
                    margin: 0,
                    fontFamily: 'Roboto',
                    fontSize: 24,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    letterSpacing: 1.08,
                  }}
                >
                  Ice Cream
                </h3>
                <p
                  style={{
                    color: 'black',
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 700,
                    letterSpacing: 1.08,
                  }}
                >
                  Web application for choosing an ice cream
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div> */}

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
              While prioritizing technical skills, the current design emphasizes
              functionality over aesthetics. However, the site is only a
              starting point and will be enhanced through future changes.
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
