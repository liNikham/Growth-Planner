import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import TokenContext from '../../context/TokenContext';

const ProtectedRoute = ({ children }) => {
  const { token, updateToken } = useContext(TokenContext);
  if (!token) {
    return <Navigate to='/login' />;
  }
  return children;
};

export default ProtectedRoute;