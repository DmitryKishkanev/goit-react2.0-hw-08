// import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { useGetState } from '@/redux/useGetState';

export default function PrivateRoute({ children, ...routeProps }) {
  const { isLoggedIn } = useGetState();
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
