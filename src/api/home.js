import {
    useGetQuery,
    // useAddMutation,
    // useUpdateMutation,
    // useDeleteMutation,
    // useToggleStatus,
  } from "./helpers";
  
  const API = {
    GET: `/api/useGetHomeStatics`,

  };
  
  const KEY = "HOME";
  export const useGetHomeStatics= () => useGetQuery(KEY, API.GET);



