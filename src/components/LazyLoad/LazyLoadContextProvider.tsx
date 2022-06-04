import React from "react";
import LazyLoadContext, {
    LazyLoadContextListener,
    LazyLoadContextValue,
} from "./LazyLoadContext";

interface LazyLoadContextProviderProps {
    children: React.ReactNode;
}

export default ({ children }: LazyLoadContextProviderProps) => {
    const [listeners, setListeners] = React.useState<LazyLoadContextListener[]>(
        []
    );

    const handleAddListener = React.useCallback(
        (listener: LazyLoadContextListener) => {
            setListeners((current) => [...current, listener]);
        },
        []
    );

    const handleRemoveListener = React.useCallback(
        (listener: LazyLoadContextListener) => {
            setListeners((current) => current.filter((l) => l !== listener));
        },
        []
    );

    const handleLoad = React.useCallback(
        (id?: string) => {
            listeners.forEach((listener) => listener("load", id));
        },
        [listeners]
    );

    const handleUnload = React.useCallback(
        (id?: string) => {
            listeners.forEach((listener) => listener("unload", id));
        },
        [listeners]
    );

    const providerValue = React.useMemo<LazyLoadContextValue>(
        () => ({
            addListener: handleAddListener,
            removeListener: handleRemoveListener,
            onLoad: handleLoad,
            onUnload: handleUnload,
        }),
        [handleAddListener, handleLoad, handleRemoveListener, handleUnload]
    );

    return (
        <LazyLoadContext.Provider value={providerValue}>
            {children}
        </LazyLoadContext.Provider>
    );
};
