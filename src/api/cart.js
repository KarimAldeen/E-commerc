import { useAddMutation, useGetQuery  } from "./helpers";
import { useDeleteMutation } from "./helpers/useDeleteMutation";
 const API = {
     Add: `/api/cart/add_product`,
     DEL: `/api/cart/remove_product`,

    GET:`/api/cart/details`
    };
  
  const KEY = "CART";
  export const useAddCart= () => useAddMutation(KEY, API.Add , false );
export const useGetCart = () => useGetQuery(KEY,API.GET )
export const useDeletCart = () => useAddMutation(KEY,API.DEL )

