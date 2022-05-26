import React from "react";
import { useMantineColorScheme } from "@mantine/core";
import { changeLanguage } from "i18next";

export default () => {
    if (process.env.NODE_ENV !== "development") {
        return null;
    }

    const { toggleColorScheme } = useMantineColorScheme();

    React.useEffect(() => {
        (window as any).toggleColorScheme = toggleColorScheme;
        (window as any).changeLanguage = changeLanguage;
    }, []);

    return null;
};
