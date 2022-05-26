import { List, ThemeIcon } from "@mantine/core";
import _ from "lodash";
import React from "react";
import { BiTask } from "react-icons/bi";
import ExperienceJobPoint from "./ExperienceJobPoint";

interface ExperienceJobPointsProps {
    jobPoints?: string[];
}

export default ({ jobPoints }: ExperienceJobPointsProps) => {
    if (!jobPoints || jobPoints.length === 0) {
        return null;
    }

    return (
        <List
            mt="md"
            pl={0}
            icon={
                <ThemeIcon color="gray" radius="xl">
                    <BiTask />
                </ThemeIcon>
            }
            spacing="md"
        >
            {_.map(jobPoints, (jobPoint) => (
                <ExperienceJobPoint key={jobPoint} jobPoint={jobPoint} />
            ))}
        </List>
    );
};
