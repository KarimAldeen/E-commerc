import {
    useGetQuery,
    // useAddMutation,
    // useUpdateMutation,
    // useDeleteMutation,
    // useToggleStatus,
  } from "./helpers";
  
  const API = {
    GET: `/api/get_statistics`,

  };
  
  const KEY = "HOME";
  export const useGetHomeStatics= (params, options) => useGetQuery(KEY, API.GET , params , options);


