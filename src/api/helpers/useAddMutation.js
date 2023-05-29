import { useQueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";
import { useAxios } from "./useAxios";
import { validateSession } from "./validateSession";
import { useTranslation } from "react-i18next";

export const useAddMutation = (key, url) => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const {t} = useTranslation();

  return useMutation(
    async (dataToSend) => {
      const { data } = await axios.post(url, dataToSend);
      return data;
    },
    {
      onSuccess: ({ message }) => {
        toast.success(message || t("added_successfully"));
        queryClient.invalidateQueries([key]);
     
      },
      onError: (err) => {
        const message = err?.response?.data?.message || t("failed_to_add_data");
        toast.error(message);
        validateSession(err.response);
      },
    }
  );
};