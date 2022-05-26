import { Text } from "@mantine/core";
import React from "react";

interface ProjectShortProps {
    short: string;
}

export default ({ short }: ProjectShortProps) => {
    return <Text>{short}</Text>;
};
