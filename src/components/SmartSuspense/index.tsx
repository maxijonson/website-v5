import React, { Suspense, SuspenseProps } from "react";
import LoadDetector from "./LoadDetector";

interface SmartSuspenseProps extends SuspenseProps {
    onLoad?: () => void;
}

const DEFAULT_ONLOAD = () => {};

export default ({
    children,
    onLoad = DEFAULT_ONLOAD,
    ...suspenseProps
}: SmartSuspenseProps) => {
    return (
        <Suspense {...suspenseProps}>
            <LoadDetector onLoad={onLoad} />
            {children}
        </Suspense>
    );
};
