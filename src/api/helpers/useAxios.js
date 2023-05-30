import axios from "axios";
// import { useTranslation } from "react-i18next";
// import languageConfig from "../../config/langConfig";
import { baseURL } from "../config";
import { useAuth } from "../../hooks/useAuth";
export const useAxios = () => {
  const { isAuthenticated, token } = useAuth();
  
  // const {t , i18n} = useTranslation()


  // const languageCode = languageConfig[i18n.language].headerCode;

  
  if (isAuthenticated) {
    return axios.create({
      headers: {
        // language: languageCode,
        Authorization: `Bearer ${token}`,
      },
      baseURL,
    });
  }
  return axios.create({
    headers: {
      // language: languageCode
    },
    baseURL,
  });
};
