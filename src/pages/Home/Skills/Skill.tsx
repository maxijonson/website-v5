import { createStyles, Group, Text } from "@mantine/core";
import _ from "lodash";
import React from "react";
import SkillProficiency from "./SkillProficiency";
import { Skill } from "./types";

interface SkillProps {
    skill: Skill;
}

const useStyles = createStyles(() => ({
    skillText: {
        maxWidth: "unset",
    },
}));

export default ({ skill }: SkillProps) => {
    const { classes } = useStyles();

    return (
        <Group key={skill.name} grow noWrap>
            <Text className={classes.skillText}>{skill.name}</Text>
            <SkillProficiency skill={skill} />
        </Group>
    );
};
