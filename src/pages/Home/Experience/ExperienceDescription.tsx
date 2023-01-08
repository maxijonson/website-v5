import { Text } from "@mantine/core";
import React from "react";

interface ExperienceDescriptionProps {
    description?: string | null;
}

export default ({ description }: ExperienceDescriptionProps) => {
    if (!description) {
        return null;
    }

    return <Text>{description}</Text>;
};
