import React from "react";
import Catcher from "../../../components/Catcher";
import SectionCatcherFallback from "./SectionCatcherFallback";

interface SectionCatcherProps {
    children?: React.ReactNode;
}

export default ({ children }: SectionCatcherProps) => {
    return (
        <Catcher
            fallback={
                <Catcher fallback="Well that's awkward... Something went terribly wrong when showing this section. Have you tried turning it on and off again?">
                    <SectionCatcherFallback />
                </Catcher>
            }
        >
            {children}
        </Catcher>
    );
};
