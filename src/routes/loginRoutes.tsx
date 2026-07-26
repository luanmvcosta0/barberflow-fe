import type { RouteObject } from "react-router";
import LoginPage from "../pages/LoginPage";

export const loginRoutes: RouteObject[] = [
  {
    path: "/login",
    Component: LoginPage,
  },
];
