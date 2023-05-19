
import { lazy } from "react";

export const RoutesConfigs = {
    home: {
        url: "/",
        title: "home",
        component: lazy(() => import("../pages/Home/HomePage")),
      },
     
}