import React from "react";
import NavContext, { NavContextValue } from "./NavContext";
import { NavHeader } from "./types";

interface NavContextProviderProps {
    children: React.ReactNode;
}

export default ({ children }: NavContextProviderProps) => {
    const [headers, setHeaders] = React.useState<NavHeader[]>([]);

    const handleRegisterHeader = React.useCallback((header: NavHeader) => {
        setHeaders((current) => {
            const sorted = [...current, header].sort(
                (
                    { order: a = Number.POSITIVE_INFINITY },
                    { order: b = Number.POSITIVE_INFINITY }
                ) => a - b
            );

            return sorted;
        });
    }, []);

    const handleUnregisterHeader = React.useCallback((header: NavHeader) => {
        setHeaders((current) => current.filter((h) => h !== header));
    }, []);

    const providerValue = React.useMemo<NavContextValue>(
        () => ({
            registerHeader: handleRegisterHeader,
            unregisterHeader: handleUnregisterHeader,
            headers,
        }),
        [handleRegisterHeader, handleUnregisterHeader, headers]
    );

    return (
        <NavContext.Provider value={providerValue}>
            {children}
        </NavContext.Provider>
    );
};
