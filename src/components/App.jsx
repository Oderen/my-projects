import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import Loader from './Loader/Loader';

import { fetchCurrentUser } from '../redux/ApiOperations';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage.js'));
const LoginPage = lazy(() => import('../pages/LoginPage.js'));
const ContactsPage = lazy(() => import('../pages/Phonebook/PhonebookPage.js'));

// Small Projects
const ImageFinder = lazy(() => import('../pages/ImageFinder/ImageFinder'));
const MovieFinder = lazy(() => import('../pages/MovieFinderPage'));
const Phonebook = lazy(() =>
  import('../pages/Phonebook-introducer/Phonebook-introducer-page')
);

const App = () => {
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);
  const isRefreshingCurrentUser = useSelector(state => state.auth.isRefreshing);

  /* eslint-disable */

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    dispatch(fetchCurrentUser());
  }, []);
  /* eslint-enable */

  return isRefreshingCurrentUser ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />}>
          <Route path="/imageFinder" element={<ImageFinder />} />
          <Route path="/movieFinder" element={<MovieFinder />} />
          <Route path="/phonebook" element={<Phonebook />} />
        </Route>
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
