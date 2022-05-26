import { createStyles, Text } from "@mantine/core";
import React from "react";
import { Education } from "./types";

interface EducationFooterProps {
    education: Education;
}

const useStyles = createStyles(() => ({
    footer: {
        fontStyle: "italic",
    },
}));

export default ({ education }: EducationFooterProps) => {
    const { classes } = useStyles();

    return (
        <Text className={classes.footer} size="sm">
            {education.type} - {education.location}
        </Text>
    );
};
