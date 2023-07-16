import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/ApiOperations';
import css from './UserMenu.module.css';
import { useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);

  const [isAvatarOpened, setAvatarStatus] = useState(false);

  const toggleAvatarMenuStatus = () => {
    setAvatarStatus(!isAvatarOpened);
  };

  return (
    <div className={css.profile}>
      <div className={css.tabletContainer}>
        <p className={css.profile__tabletName}>{name}</p>
        <button
          type="button"
          className={css.profile__tabletButton}
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Logout
        </button>
      </div>

      <button
        type="button"
        className={isAvatarOpened ? css.profileMenu__closeButton : css.avatar}
        onClick={() => {
          toggleAvatarMenuStatus();
        }}
      >
        {isAvatarOpened ? (
          <AiOutlineClose className={css.profileMenu__closeIcon} />
        ) : (
          name.slice(0, 1).toUpperCase()
        )}
      </button>

      <div
        className={
          !isAvatarOpened
            ? `${css.profileMenu}`
            : `${css.profileMenu} ${css.profileMenu__active}`
        }
      >
        <p className={css.profile__name}>{name}</p>
        <button
          type="button"
          className={css.profile__button}
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
