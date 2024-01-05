import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={appTheme}>
        <AppRoutes />
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
