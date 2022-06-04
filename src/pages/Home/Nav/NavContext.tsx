import React from "react";
import { NavHeader } from "./types";

export interface NavContextValue {
    registerHeader: (header: NavHeader) => void;
    unregisterHeader: (header: NavHeader) => void;
    headers: NavHeader[];
}

export default React.createContext<NavContextValue>({
    registerHeader: () => {},
    unregisterHeader: () => {},
    headers: [],
});
