import { SimpleGrid, useMantineTheme } from "@mantine/core";
import _ from "lodash";
import React from "react";
import SkillGroup from "./SkillGroup";
import useSkills from "./useSkills";

export default () => {
    const theme = useMantineTheme();
    const skills = useSkills();

    return (
        <SimpleGrid
            cols={3}
            mt="lg"
            breakpoints={[
                { maxWidth: theme.breakpoints.md, cols: 2 },
                { maxWidth: theme.breakpoints.sm, cols: 1 },
            ]}
        >
            {_.map(skills, (skillGroup) => (
                <SkillGroup skillGroup={skillGroup} />
            ))}
        </SimpleGrid>
    );
};
