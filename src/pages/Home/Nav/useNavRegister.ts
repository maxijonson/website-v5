import React from "react";
import { useScrollIntoView } from "@mantine/hooks";
import NavContext from "./NavContext";
import { NavHeader } from "./types";

export default (name: string) => {
    const scrollTarget = useScrollIntoView<HTMLDivElement>();
    const { registerHeader, unregisterHeader } = React.useContext(NavContext);

    React.useEffect(() => {
        const header: NavHeader = {
            name,
            element: scrollTarget,
        };

        registerHeader(header);
        return () => {
            unregisterHeader(header);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, registerHeader, unregisterHeader]);

    return scrollTarget;
};
