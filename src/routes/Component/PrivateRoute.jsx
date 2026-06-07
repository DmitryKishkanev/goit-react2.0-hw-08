import { Navigate, useLocation } from 'react-router-dom';
import { useGetState } from '@/redux/useGetState';

export default function PrivateRoute({ children, navigateTo = '/' }) {
  const { isLoggedIn, isRefreshing } = useGetState();
  // Добавляем useLocation, чтобы при перезагрузке страницы возвращаться на дочерний маршрут
  const location = useLocation();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    <Navigate to={location.state ? location.state : navigateTo} />
  ) : (
    children
  );
}
