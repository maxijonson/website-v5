import { SimpleGrid, useMantineTheme } from "@mantine/core";
import _ from "lodash";
import React from "react";
import ProjectCard from "./Project";
import useProjects from "./useProjects";

export default () => {
    const theme = useMantineTheme();
    const projects = useProjects();

    return (
        <SimpleGrid
            cols={3}
            mt="lg"
            breakpoints={[
                { maxWidth: theme.breakpoints.md, cols: 2 },
                { maxWidth: theme.breakpoints.sm, cols: 1 },
            ]}
        >
            {_.map(projects, (project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </SimpleGrid>
    );
};
