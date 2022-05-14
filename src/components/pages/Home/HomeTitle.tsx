import React from "react";
import { createStyles, Title, Divider } from "@mantine/core";

interface HomeTitleProps {
    title: string;
}

const useStyles = createStyles((theme) => ({
    title: {
        fontFamily: "Staatliches",
        color: theme.colors.dark[8],
        textTransform: "uppercase",
        textAlign: "center",
    },
}));

export default ({ title }: HomeTitleProps) => {
    const { classes } = useStyles();
    return (
        <div>
            <Title className={classes.title} order={1}>
                {title}
            </Title>
            <Divider size="xl" />
        </div>
    );
};
