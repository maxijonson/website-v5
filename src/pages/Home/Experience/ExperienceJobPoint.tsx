import { ListItem } from "@mantine/core";
import React from "react";

interface ExperienceJobPointProps {
    jobPoint: string;
}

export default ({ jobPoint }: ExperienceJobPointProps) => {
    return <ListItem>{jobPoint}</ListItem>;
};
