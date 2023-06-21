import { useAddMutation } from "./helpers";




export const useSendContactUs= () => useAddMutation("CONTACT_US", `/api/contact_us` );
