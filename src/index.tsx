import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from "@mantine/core";
import App from "./components/App";
import DebugTools from "./components/DebugTools";
import "./i18n";
import Fonts from "./components/Fonts";
import GlobalStyles from "./components/GlobalStyles";

const root = createRoot(document.getElementById("root")!);

const Root = () => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(
            (current) => value || (current === "dark" ? "light" : "dark")
        );

    return (
        <StrictMode>
            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    theme={{
                        fontFamily: "Lato",
                    }}
                    defaultProps={{
                        Anchor: {
                            weight: "bold",
                            underline: false,
                        },
                    }}
                    styles={{
                        Anchor: {
                            root: {
                                color: "#0048cf",
                            },
                        },
                    }}
                    withNormalizeCSS
                    withGlobalStyles
                >
                    <DebugTools />
                    <Fonts />
                    <GlobalStyles />
                    <App />
                </MantineProvider>
            </ColorSchemeProvider>
        </StrictMode>
    );
};

root.render(<Root />);
