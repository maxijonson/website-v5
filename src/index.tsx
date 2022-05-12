import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
    TypographyStylesProvider,
} from "@mantine/core";
import initLocales from "./i18n";
import App from "./components/App";
import DebugTools from "./components/DebugTools";

initLocales(); // If this is too slow, consider adding it in a "Loading" component and awaiting it.

const root = createRoot(document.getElementById("root")!);

const Root = () => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(
            (current) => value || (current === "dark" ? "light" : "dark")
        );

    return (
        <StrictMode>
            <TypographyStylesProvider>
                <ColorSchemeProvider
                    colorScheme={colorScheme}
                    toggleColorScheme={toggleColorScheme}
                >
                    <MantineProvider withNormalizeCSS withGlobalStyles>
                        <DebugTools />
                        <App />
                    </MantineProvider>
                </ColorSchemeProvider>
            </TypographyStylesProvider>
        </StrictMode>
    );
};

root.render(<Root />);
