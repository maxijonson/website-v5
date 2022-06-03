import { createStyles } from "@mantine/core";
import React from "react";

export interface TransitionnerProps {
    type: "slantasc" | "slantdesc" | "roundup" | "rounddown";
    from: string;
    to: string;
}

interface UseStylesParams {
    from: string;
    to: string;
}

const useStyles = createStyles((theme, { from, to }: UseStylesParams) => ({
    slantasc: {
        position: "absolute",
        background: `linear-gradient(to right bottom, ${from} 49%, ${to} 50%)`,
        top: 0,
        left: 0,
        width: "100%",
        height: "5vh",
    },
    slantdesc: {
        position: "absolute",
        background: `linear-gradient(to left bottom, ${from} 49%, ${to} 50%)`,
        top: 0,
        left: 0,
        width: "100%",
        height: "5vh",
    },
    roundup: {
        position: "absolute",
        background: to,
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "100% 100% 0 0",
        bottom: "-150px",
        width: "150vw",
        height: "200px",

        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            bottom: "-436px",
            width: "150vw",
            height: "500px",
        },
    },
    rounddown: {
        position: "absolute",
        background: from,
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "0 0 100% 100%",
        top: "-150px",
        width: "150vw",
        height: "200px",

        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            top: "-436px",
            width: "150vw",
            height: "500px",
        },
    },
}));

export default ({ type, from, to }: TransitionnerProps) => {
    const { classes } = useStyles({ from, to });
    return <div className={classes[type]} />;
};
