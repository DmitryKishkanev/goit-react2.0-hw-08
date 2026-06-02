import { Navigate } from 'react-router-dom';
import { useGetState } from '@/redux/useGetState';

export default function RestrictedRoute({
  children,
  restricted = false,
  navigateTo = '/',
}) {
  const { isLoggedIn } = useGetState();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={navigateTo} replace /> : children;
}
