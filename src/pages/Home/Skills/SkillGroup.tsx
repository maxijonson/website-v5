import { Card, createStyles, Stack } from "@mantine/core";
import _ from "lodash";
import React from "react";
import HomeTitle from "../HomeTitle";
import Skill from "./Skill";
import { SkillGroup } from "./types";

interface SkillGroupProps {
    skillGroup: SkillGroup;
}

const useStyles = createStyles(() => ({
    groupCard: {
        overflow: "visible",
    },
    groupTitle: {
        h2: {
            marginTop: "0px",
        },
    },
}));

export default ({ skillGroup }: SkillGroupProps) => {
    const { classes } = useStyles();

    return (
        <Card shadow="sm" withBorder className={classes.groupCard}>
            <Stack>
                <HomeTitle
                    className={classes.groupTitle}
                    order={2}
                    title={skillGroup.name}
                    align="left"
                />
                {_.map(skillGroup.skills, (skill) => (
                    <Skill key={skill.name} skill={skill} />
                ))}
            </Stack>
        </Card>
    );
};
