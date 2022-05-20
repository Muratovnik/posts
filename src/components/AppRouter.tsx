import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "@UI/Loader/Loader";

import { publicRoutes, privateRoutes } from "@router";
import { AuthContext } from "@context";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  const routes = isAuth ? privateRoutes : publicRoutes;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        ></Route>
      ))}
    </Routes>
  );
};

export default AppRouter;
