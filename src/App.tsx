import { RouterProvider } from "react-router";
import router from "./routes";
import { ThemeProvider } from "@emotion/react";
import { LightTheme } from "./shared/theme";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
