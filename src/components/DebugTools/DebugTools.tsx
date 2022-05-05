import { useMantineColorScheme } from "@mantine/core";
import React from "react";

export default () => {
    if (process.env.NODE_ENV !== "development") {
        return null;
    }

    const { toggleColorScheme } = useMantineColorScheme();

    React.useEffect(() => {
        (window as any).toggleColorScheme = toggleColorScheme;
    }, []);

    return null;
};
