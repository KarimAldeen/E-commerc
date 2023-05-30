import {
    useGetQuery,
    // useAddMutation,
    // useUpdateMutation,
    // useDeleteMutation,
    // useToggleStatus,
  } from "./helpers";
  
  const API = {
    GET: `/api/get_statistics`,
    GETCartCount: `/api/cart_wishlist_items_count`,
  };
  
  const KEY = "HOME";
  export const useGetHomeStatics= (params, options) => useGetQuery(KEY, API.GET , params , options);


  
  export const useGetCartCount= (params, options) => useGetQuery("CART", API.GETCartCount , params , options);


