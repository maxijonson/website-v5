import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider, TypographyStylesProvider } from "@mantine/core";
import App from "./components/App/App";

const root = createRoot(document.getElementById("root")!);
root.render(
    <StrictMode>
        <TypographyStylesProvider>
            <MantineProvider withNormalizeCSS withGlobalStyles>
                <App />
            </MantineProvider>
        </TypographyStylesProvider>
    </StrictMode>
);
