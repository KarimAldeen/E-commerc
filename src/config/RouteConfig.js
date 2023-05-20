
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
      
      contactus:{
        url: "/contactus",
        title: "contactus",
        component: lazy(() => import("../pages/ContactUs/ContactUs_Page")),
      }}