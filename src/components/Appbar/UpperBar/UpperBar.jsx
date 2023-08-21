import { useSelector } from 'react-redux';

import { UserMenu } from 'components/Appbar/UserMenu/UserMenu';
import { AuthNav } from 'components/Appbar/AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';

import css from './UpperBar.module.css';

const Appbar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLogged);

  return (
    <div className={css.navigationContainer}>
      <Navigation />

      {isLoggedIn && <UserMenu />}
    </div>
  );
};

export default Appbar;
