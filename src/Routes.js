import React from "react";
import { lazy } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";


import AuthComponents from "./AuthComponents";
import { RoutesConfigs } from "./config/RouteConfig";



const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound"));

const AppRouter = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};
export default AppRouter;

function AppRoutes() {



  return (
    <Routes>
      {Object.keys(RoutesConfigs).map((key) => {
        const { url, isPrivate, component: Component } = RoutesConfigs[key];

        return (
          <Route
            key={url}
            path={url}
            element={
              isPrivate ? (
                <AuthComponents>
                  <Component />
                </AuthComponents>
              ) : (
                <Component />
              )
            }
          />
        );
      })}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}
