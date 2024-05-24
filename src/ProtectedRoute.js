import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  if (!isAuthenticated) {
    alert("Para acceder tienes que iniciar sesión");
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/factura" />
        )
      }
    />
  );
};

export default ProtectedRoute;
