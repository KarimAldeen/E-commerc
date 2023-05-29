import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Routes } from "./Routes";

export const useUrlCorrection = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    let isFound = false;
    Object.keys(Routes).forEach((key) => {
      if (pathname.includes(Routes[key].url)) {
        isFound = true;
      }
    });
    if (!isFound) {
      navigate(Routes["home"].url || "/");
    }
  }, [pathname, navigate]);
};
