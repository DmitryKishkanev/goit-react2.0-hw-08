import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshCurrentUser } from '@/redux/auth/operations';
import { useGetState } from '@/redux/useGetState';
import Layout from '@/routes/Component/Layout';
import NotFoundPage from '@/routes/Pages/NotFoundPage';
import PrivateRoute from '@/routes/Component/PrivateRoute';
import RestrictedRoute from '@/routes/Component/RestrictedRoute';
import style from './App.module.css';

const Home = lazy(() => import('@/routes/Pages/Home'));
const PhonebookDetails = lazy(() => import('@/routes/Pages/PhonebookDetails'));
// const Description = lazy(() => import('@/routes/Component/Description'));
const LoginPage = lazy(() => import('@/routes/Pages/LoginPage'));
const RegisterPage = lazy(() => import('@/routes/Pages/RegisterPage'));
const NewContactPage = lazy(() => import('@/routes/Component/NewContactPage'));
const FindContactPage = lazy(
  () => import('@/routes/Component/FindContactPage'),
);

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useGetState();

  // При перезагрузке страницы возвращаем пользователя
  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div className={style.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute>
                <Home />
              </RestrictedRoute>
            }
          />

          <Route
            path="login"
            element={
              <RestrictedRoute navigateTo="/phonebook" restricted>
                <LoginPage />
              </RestrictedRoute>
            }
          />

          <Route
            path="register"
            element={
              <RestrictedRoute restricted>
                <RegisterPage />
              </RestrictedRoute>
            }
          />

          <Route
            path="phonebook"
            element={
              <PrivateRoute navigateTo="/login">
                <PhonebookDetails />
              </PrivateRoute>
            }
          >
            {/* <Route
                path="description"
                element={
                  <PrivateRoute navigateTo="/login">
                    <Description />
                  </PrivateRoute>
                }
              /> */}

            <Route
              path="newContactPage"
              element={
                <PrivateRoute navigateTo="/login">
                  <NewContactPage />
                </PrivateRoute>
              }
            />

            <Route
              path="findContactPage"
              element={
                <PrivateRoute navigateTo="/login">
                  <FindContactPage />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
