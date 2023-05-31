import {
    useGetQuery,
    useAddMutation,
    // useUpdateMutation,
    // useDeleteMutation,
    // useToggleStatus,
  } from "./helpers";
  
  const API = {
    REGISTER: `/api/register`,
    LOGIN: `/api/login`,
    VERIFY_CODE: `/api/verify_code`,

  };
  
  const KEY = "AUTH";
  export const useRegister= (params, options) => useAddMutation("REGISTER", API.REGISTER );

  export const useLogin= (params, options) => useAddMutation(KEY, API.LOGIN );

  export const useVirfayCode= (params, options) => useAddMutation("VERIFAY", API.VERIFY_CODE );




