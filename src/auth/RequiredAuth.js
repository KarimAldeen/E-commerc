import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

const RequireAuth = ({ children, redirectTo, fallback = "Loading ..." }) => {
    const  {isAuthenticated} = useAuth() ;

  if(isAuthenticated){
    return children
  }
  toast.error('please_login')

  return <Navigate to={redirectTo} />;
};

export default RequireAuth;
