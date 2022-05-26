import { Text } from "@mantine/core";
import React from "react";

interface ProjectTitleProps {
    title: string;
}

export default ({ title }: ProjectTitleProps) => {
    return (
        <Text transform="uppercase" weight={600}>
            {title}
        </Text>
    );
};
