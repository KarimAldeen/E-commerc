import {
    useGetQuery,
    // useAddMutation,
    // useUpdateMutation,
    // useDeleteMutation,
    // useToggleStatus,
  } from "./helpers";
  
  const API = {
  
    GETALL: `/api/order/all`,
    GET: `/api/order/details`,
   
    
  };
  
  const KEY = "ORDER";
  export const useGetOrder= (params, options) => useGetQuery(KEY, API.GETALL , params , options);
 export const useGetSingleOrder  = (params) => useGetQuery ( KEY  , API.GET , params)