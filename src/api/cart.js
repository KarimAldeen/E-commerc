import { useAddMutation, useGetQuery  } from "./helpers";
 const API = {
     Add: `/api/cart/add_product`,
    GET:`/api/cart/details`
    };
  
  const KEY = "CART";
  export const useAddCart= () => useAddMutation(KEY, API.Add );
export const useGetCart = () => useGetQuery(KEY,API.GET )


