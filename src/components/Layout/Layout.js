import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Appbar from '../Appbar/UpperBar/UpperBar';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.container}>
      <header>
        <Appbar />
      </header>
      <main style={{}}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
