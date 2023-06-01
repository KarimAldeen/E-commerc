import { useAddMutation } from "./helpers"





const KEY = "CART" 


const API = {
    ADD : `/api/order/checkout`
}

export const useAddCheckout = () => useAddMutation(KEY , API.ADD)