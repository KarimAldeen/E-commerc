import { useSelector } from "react-redux";
import { authStorage } from "../pages/Auth/AuthStorage";

export const useAuth = () => {
  const { user, token, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  


  const logout = () => {
    authStorage.remove()
  };

  return {
    user,
    token,
    isAuthenticated,
   
    
    logout,
    
  };
};


