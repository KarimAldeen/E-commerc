import axios from "axios";
// import { useAuth } from "redux/hooks/auth";
import { useTranslation } from "react-i18next";
import languageConfig from "../../config/langConfig";
import { baseURL } from "../config";
export const useAxios = () => {
  // const { isAuthenticated, token } = useAuth();
  const token = "gfrwg";
  const {t , i18n} = useTranslation()
  const languageCode = languageConfig[i18n.language].headerCode;
  if (false) {
    return axios.create({
      headers: {
        language: languageCode,
        Authorization: `Bearer ${token}`,
      },
      baseURL,
    });
  }
  return axios.create({
    headers: {
      language: languageCode
    },
    baseURL,
  });
};
