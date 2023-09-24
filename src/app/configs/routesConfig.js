import FuseLoading from "@fuse/core/FuseLoading";
import FuseUtils from "@fuse/utils";
import settingsConfig from "app/configs/settingsConfig";
import { Navigate } from "react-router-dom";
import dashboardsConfigs from "../main/dashboards/dashboardsConfigs";
import pagesConfigs from "../main/pages/pagesConfigs";
import SignInConfig from "../main/sign-in/SignInConfig";
import SignOutConfig from "../main/sign-out/SignOutConfig";

const routeConfigs = [
  ...dashboardsConfigs,
  ...pagesConfigs,
  SignOutConfig,
  SignInConfig,
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(
    routeConfigs,
    settingsConfig.defaultAuth
  ),
  {
    path: "/",
    element: <Navigate to="dashboards/analytics" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: "loading",
    element: <FuseLoading />,
  },
  {
    path: "*",
    element: <Navigate to="pages/error/404" />,
  },
];

export default routes;
