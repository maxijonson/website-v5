import React from "react";

export type LazyLoadContextEventType = "load" | "unload";

export type LazyLoadContextListener = (
    eventType: LazyLoadContextEventType,
    id?: string
) => void;

export interface LazyLoadContextValue {
    addListener: (listener: LazyLoadContextListener) => void;
    removeListener: (listener: LazyLoadContextListener) => void;
    onLoad: (id?: string) => void;
    onUnload: (id?: string) => void;
}

export default React.createContext<LazyLoadContextValue>({
    addListener: () => {},
    removeListener: () => {},
    onLoad: () => {},
    onUnload: () => {},
});
