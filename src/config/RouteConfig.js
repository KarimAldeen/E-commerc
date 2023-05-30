
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
        isPrivate:true
      },
      product:{
        url: "/product",
        title: "product",
        component: lazy(() => import("../pages/Product/Product")),
      },
      order:{
        url: "/order/:id",
        title: "order",
        component: lazy(() => import("../pages/Order/OrderPage")),
        isPrivate:true
      },
    
      allorder:{
        url: "/allorder",
        title: "allorder",
        component: lazy(() => import("../pages/Order/AllOrder")),
        isPrivate:true
      },
      CardInfo:{
        url: "/product/:id",
        title: "CardInfo",
        component: lazy(() => import("../pages/Product/CardInfo")),
      },
      login:{
        url: "/login",
        title: "login",
        component: lazy(() => import("../pages/Auth/LoginPage")),
      },
      verification:{
        url: "/verification",
        title: "verification",
        component: lazy(() => import("../pages/Auth/Verification")),
      },
      contactus:{
        url: "/contactus",
        title: "contactus",
        component: lazy(() => import("../pages/ContactUs/ContactUs_Page")),
      }}