import { useColorScheme } from "@mantine/hooks";
import React from "react";

import Favicon32 from "../../assets/images/favicon/favicon-inverted-32x32.png";
import Favicon16 from "../../assets/images/favicon/favicon-inverted-16x16.png";
import Favicon from "../../assets/images/favicon/favicon-inverted.ico";

export default () => {
    const preferredColorScheme = useColorScheme();

    React.useEffect(() => {
        if (preferredColorScheme === "dark") {
            document
                .getElementById("favicon32")
                ?.setAttribute("href", Favicon32);
            document
                .getElementById("favicon16")
                ?.setAttribute("href", Favicon16);
            document.getElementById("favicon")?.setAttribute("href", Favicon);
        }
    }, [preferredColorScheme]);

    return null;
};
