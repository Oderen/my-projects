// import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';

// import { BiMenu } from 'react-icons/bi';
// import { AiOutlineClose } from 'react-icons/ai';
// import { useState } from 'react';

// export const AuthNav = () => {
//   const [isMenuOpened, setMenuStatus] = useState(false);

//   const toggleMenuStatus = () => {
//     setMenuStatus(!isMenuOpened);
//   };

//   return (
//     <div className={css.auth}>
//       <button
//         type="button"
//         className={css.auth__button}
//         onClick={() => {
//           toggleMenuStatus();
//         }}
//       >
//         {isMenuOpened ? (
//           <AiOutlineClose className={css.auth__icon} />
//         ) : (
//           <BiMenu className={css.auth__icon} />
//         )}
//       </button>

//       <div
//         className={
//           !isMenuOpened
//             ? `${css.contentMenu}`
//             : `${css.contentMenu} ${css.contentMenu__active}`
//         }
//       >
//         <ul className={css.auth__list}>
//           <li className={css.auth__item}>
//             <NavLink
//               to="/register"
//               className={css.auth__link}
//               onClick={() => {
//                 toggleMenuStatus();
//               }}
//             >
//               Sign Up
//             </NavLink>
//           </li>
//           <li className={css.auth__item}>
//             <NavLink
//               to="/login"
//               className={css.auth__link}
//               onClick={() => {
//                 toggleMenuStatus();
//               }}
//             >
//               Login
//             </NavLink>
//           </li>
//         </ul>
//       </div>

//       <ul className={css.auth__tabletList}>
//         <li className={css.auth__Tabletitem}>
//           <NavLink to="/register" className={css.auth__Tabletlink}>
//             Sign Up
//           </NavLink>
//         </li>
//         <li className={css.auth__Tabletitem}>
//           <NavLink to="/login" className={css.auth__Tabletlink}>
//             Login
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };
