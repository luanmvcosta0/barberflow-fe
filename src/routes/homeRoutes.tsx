import type { RouteObject } from "react-router";
import HomePage from "../pages/HomePage";

export const homeRoutes: RouteObject[] = [
  {
    path: "/",
    Component: HomePage,
  },
];
