// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useGetState } from '@/redux/useGetState';

export default function PrivateRoute({ children, navigateTo = '/' }) {
  const { isLoggedIn } = useGetState();
  return isLoggedIn ? children : <Navigate to={navigateTo} replace />;
}
