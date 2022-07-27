import { List } from "@mantine/core";
import React from "react";

interface ExperienceJobPointProps {
    jobPoint: string;
}

export default ({ jobPoint }: ExperienceJobPointProps) => {
    return <List.Item>{jobPoint}</List.Item>;
};
