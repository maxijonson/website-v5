import React, { ErrorInfo } from "react";

interface CatcherProps {
    children?: React.ReactNode;
    fallback?: React.ReactNode;
}

interface CatcherState {
    hasError: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
class Catcher extends React.Component<CatcherProps, CatcherState> {
    constructor(props: CatcherProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_error: any) {
        return { hasError: true };
    }

    override componentDidCatch(error: Error, info: ErrorInfo) {
        console.error(error, info);
    }

    override render() {
        const { hasError } = this.state;
        const { children, fallback = null } = this.props;

        if (hasError) {
            return fallback;
        }

        return children;
    }
}

export default Catcher;
