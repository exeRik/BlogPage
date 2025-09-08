import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider defaultColorScheme="light" withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
);
