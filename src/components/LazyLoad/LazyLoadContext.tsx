import React from "react";

export type LazyLoadContextEventType = "load" | "unload";

export type LazyLoadContextListener = (
    eventType: LazyLoadContextEventType,
    id?: string
) => void;

export interface LazyLoadContextParams {
    addListener: (listener: LazyLoadContextListener) => void;
    removeListener: (listener: LazyLoadContextListener) => void;
    onLoad: (id?: string) => void;
    onUnload: (id?: string) => void;
}

export default React.createContext<LazyLoadContextParams>({
    addListener: () => {},
    removeListener: () => {},
    onLoad: () => {},
    onUnload: () => {},
});
