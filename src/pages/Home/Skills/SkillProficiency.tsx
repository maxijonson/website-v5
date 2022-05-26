import { createStyles, Group, Tooltip } from "@mantine/core";
import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";
import SkillLogo from "./SkillLogo";
import { Skill } from "./types";

interface SkillProficiencyProps {
    skill: Skill;
}

const useStyles = createStyles(() => ({
    skillTooltip: {
        flexGrow: "unset",
    },
}));

export default ({ skill }: SkillProficiencyProps) => {
    const { t } = useTranslation(["home"]);
    const { classes } = useStyles();

    return (
        <Tooltip
            className={classes.skillTooltip}
            label={t(`home:skills.proficiency.${skill.proficiency}`)}
            withArrow
            transition="pop"
        >
            <Group spacing={1}>
                {_.times(skill.proficiency, (i) => (
                    <SkillLogo key={i} name={skill.name} logo={skill.logo} />
                ))}
                {_.times(5 - skill.proficiency, (i) => (
                    <SkillLogo
                        key={i}
                        name={skill.name}
                        logo={skill.logo}
                        disabled
                    />
                ))}
            </Group>
        </Tooltip>
    );
};
