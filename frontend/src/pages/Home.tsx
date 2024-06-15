import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { RootContext } from '../App';

const Home = () => {
  const context = useContext(RootContext);

  if (!context) {
    return <div>Error: Context not found</div>;
  }

  const { auth } = context;

  if (!auth) {
    return <Navigate to="/auth/signin" />;
  }

  return <Navigate to="/results" />;
};

export default Home;