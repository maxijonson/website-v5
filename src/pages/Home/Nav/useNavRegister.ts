import React from "react";
import { useScrollIntoView } from "@mantine/hooks";
import NavContext from "./NavContext";
import { NavHeader } from "./types";

export default (name: string) => {
    const scrollTarget = useScrollIntoView<HTMLDivElement>();
    const { scrollIntoView, targetRef } = scrollTarget;
    const y = targetRef.current?.offsetTop ?? 0;
    const { registerHeader, unregisterHeader } = React.useContext(NavContext);

    React.useEffect(() => {
        const header: NavHeader = {
            name,
            scrollIntoView,
            order: y,
        };

        registerHeader(header);
        return () => {
            unregisterHeader(header);
        };
    }, [name, registerHeader, scrollIntoView, unregisterHeader, y]);

    return scrollTarget.targetRef;
};
