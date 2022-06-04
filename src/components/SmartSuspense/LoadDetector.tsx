import React from "react";

interface LoadDetectorProps {
    onLoad: () => void;
}

export default ({ onLoad }: LoadDetectorProps) => {
    React.useEffect(() => {
        onLoad();
    }, [onLoad]);
    return null;
};
