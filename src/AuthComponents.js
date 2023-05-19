import { RoutesConfigs } from "./config/RouteConfig";
import RequireAuth from "./auth/RequiredAuth";
import { LoadingPage } from "./pages/Loading/LoadingPage";

const AuthComponents = ({ children, ...props }) => {
  return (
    <RequireAuth
      redirectTo={RoutesConfigs.home.url}
      fallback={<LoadingPage />}
      {...props}
    >
      {children}
    </RequireAuth>
  );
};

export default AuthComponents;
