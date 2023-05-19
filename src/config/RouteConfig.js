
import { lazy } from "react";

export const RoutesConfigs = {
    home: {
        url: "/",
        title: "home",
        component: lazy(() => import("../pages/Home/HomePage")),
      },
      contac: {
        url: "/contac",
        title: "contac",
        component: lazy(() => import("../pages/ContactUs/ContactUsPage")),
      },
}