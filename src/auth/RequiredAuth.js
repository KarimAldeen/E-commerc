import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const RequireAuth = ({ children, redirectTo, fallback = "Loading ..." }) => {
    const  {isAuthenticated} = useAuth() ;
  const {t}= useTranslation()
  if(isAuthenticated){
    return children
  }
  toast.error(t('Please Login First'))

  return <Navigate to={redirectTo} />;
};

export default RequireAuth;
