import { Suspense, createContext, lazy, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// import ECommerce from './pages/Dashboard/ECommerce';
import Home from './pages/Home';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

interface RootContextType {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
}

export const RootContext = createContext<RootContextType | null>(null);

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <RootContext.Provider value={{ auth, setAuth }}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          containerClassName="overflow-auto"
        />
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            {routes.map((routes, index) => {
              const { path, component: Component } = routes;
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <Suspense fallback={<Loader />}>
                      <Component />
                    </Suspense>
                  }
                />
              );
            })}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </RootContext.Provider>
    </>
  );
}

export default App;
