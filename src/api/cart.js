import { useAddMutation  } from "./helpers";
 const API = { Add: `/cart/add_product`,};
  
  const KEY = "cart";
  export const useAddCart= (params, options) => useAddMutation(KEY, API.Add , params , options);



