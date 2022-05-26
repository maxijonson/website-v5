import { Anchor, createStyles, MantineSize } from "@mantine/core";
import React from "react";

interface HeaderAnchorProps {
    children: React.ReactNode;
    onClick: () => void;
    size?: MantineSize | undefined;
}

const useStyles = createStyles((theme) => ({
    header: {
        color: `${theme.colors.dark[5]}`,
        display: "block",
        position: "relative",
        overflow: "hidden",
        opacity: 1,
        textTransform: "uppercase",
        fontWeight: "bold",

        "&::after": {
            content: "''",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "2px",
            background: `${theme.colors.dark[5]}`,
            transform: "translate3d(calc(-100% - 1px), 0, 0)",
            transition: "transform 0.2s ease-in-out",
        },

        "&:hover::after": {
            transform: "translate3d(0, 0, 0)",
        },
    },
}));

export default ({ onClick, children, size = "sm" }: HeaderAnchorProps) => {
    const { classes } = useStyles();

    return (
        <Anchor
            component="span"
            className={classes.header}
            size={size}
            onClick={onClick}
        >
            {children}
        </Anchor>
    );
};
