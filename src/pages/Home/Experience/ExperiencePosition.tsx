import { createStyles, Text } from "@mantine/core";
import React from "react";

interface ExperiencePositionProps {
    position: string;
}

const useStyles = createStyles(() => ({
    jobPosition: {
        fontStyle: "italic",
    },
}));

export default ({ position }: ExperiencePositionProps) => {
    const { classes } = useStyles();

    return (
        <Text className={classes.jobPosition} size="md">
            {position}
        </Text>
    );
};
