import {
    useGetQuery,
    // useAddMutation,
    // useUpdateMutation,
    // useDeleteMutation,
    // useToggleStatus,
  } from "./helpers";
  
  const API = {
    GET: `/api/all_products`,

  };
  
  const KEY = "PRDUCTS";
  export const useGetProducts= (params, options) => useGetQuery(KEY, API.GET , params , options);



