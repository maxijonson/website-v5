import { Text } from "@mantine/core";
import React from "react";

interface EducationTitleProps {
    title: string;
}

export default ({ title }: EducationTitleProps) => {
    return (
        <Text size="lg" weight="bold">
            {title}
        </Text>
    );
};
