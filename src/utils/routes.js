import {
    Route
  } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyAds from "../pages/MyAds";
import UploadAd from "../pages/UploadAd";

  export const routes = [
    {
      path: "/",
      exact: true,
      component: Home
    },
    {
      path: "/myads/:page",
      component: MyAds
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/upload-ad",
      component: UploadAd
    },
    {
      path: "/login",
      component: Login
    },
    // {
    //   path: "/tacos",
    //   component: Tacos,
    //   routes: [
    //     {
    //       path: "/tacos/bus",
    //       component: Bus
    //     },
    //     {
    //       path: "/tacos/cart",
    //       component: Cart
    //     }
    //   ]
    // }
  ];

  export function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }