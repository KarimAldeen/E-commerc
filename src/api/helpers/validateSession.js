import { logout } from "../../redux/AuthReducer";
import store from "../../redux/store";

export const validateSession = ({ status }) => {
  if (status === 401 || status === 403) {
    // toast.error("Session Expired, Please Login");
    store.dispatch(logout());
  }
};
