import { createBrowserRouter } from "react-router";
import { homeRoutes } from "./homeRoutes";
import { loginRoutes } from "./loginRoutes";

const router = createBrowserRouter([...homeRoutes, ...loginRoutes]);

export default router;
