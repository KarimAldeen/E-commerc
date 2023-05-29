import {
    useGetQuery,
    // useAddMutation,
    // useUpdateMutation,
    // useDeleteMutation,
    // useToggleStatus,
  } from "./helpers";
  
  const API = {
  
    GET: `/api/category`,
   
    
  };
  
  const KEY = "";
  export const useGetCategory= (params, options) => useGetQuery("CATEGORY", API.GET , params , options);
 