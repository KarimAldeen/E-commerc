import { useQuery } from "react-query";
import { useAxios } from "./useAxios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import {history} from '../../history'
import { useLocation } from "react-router";
import { authStorage } from "../../pages/Auth/AuthStorage";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/AuthReducer";
export const useGetQuery = (key, url, params = null, options = {}) => {
  const axios = useAxios();
const {t} = useTranslation()
    const dispatch = useDispatch()
  return useQuery(
    params ? [key, params] : key,
    async () => {
      const { data } = await axios.get(url, { params });
      return data.data;
    },
    {
      retry:false,
      refetchOnWindowFocus:false ,     
      ...options
    }
  );
};
