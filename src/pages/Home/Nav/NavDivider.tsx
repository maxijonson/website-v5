import { createStyles, Divider } from "@mantine/core";
import React from "react";

interface NavDividerProps {
    hidden?: boolean;
}

const useStyles = createStyles(() => ({
    divider: {
        zIndex: 100,
        margin: "auto 0",
        height: "32px",
    },
}));

export default ({ hidden = false }: NavDividerProps) => {
    const { classes } = useStyles();

    if (hidden) {
        return null;
    }

    return (
        <Divider
            className={classes.divider}
            orientation="vertical"
            color="dark"
        />
    );
};
