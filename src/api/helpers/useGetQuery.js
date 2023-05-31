import { useQuery } from "react-query";
import { useAxios } from "./useAxios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import {history} from '../../history'
import { useLocation } from "react-router";
export const useGetQuery = (key, url, params = null, options = {}) => {
  const axios = useAxios();
const {t} = useTranslation()
  
  return useQuery(
    params ? [key, params] : key,
    async () => {
      const { data } = await axios.get(url, { params });
      return data.data;
    },
    {
      retry:false,
      onError: (err) => {
        let message ='';
        console.log(err);
        if(err.response.status === 401){
          message =  t("please_login_first");
          toast.error(message)
         

        }
     
      },     
      ...options
    }
  );
};
