
import { lazy } from "react";

export const RoutesConfigs = {
    home: {
        url: "/",
        title: "home",
        component: lazy(() => import("../pages/Home/HomePage")),
      },
     cart:{
        url: "/cart",
        title: "cart",
        component: lazy(() => import("../pages/Cart/CartPage")),
      },
      product:{
        url: "/product",
        title: "product",
        component: lazy(() => import("../pages/Product/Product")),
      },
}