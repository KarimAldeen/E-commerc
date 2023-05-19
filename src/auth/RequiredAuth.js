import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children, redirectTo, fallback = "Loading ..." }) => {
    const  isAuthenticated = true ;
    const loadingInitial = false;

  if (loadingInitial) {
    return fallback;
  }
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default RequireAuth;
