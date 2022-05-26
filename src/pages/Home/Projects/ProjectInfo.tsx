import { Stack } from "@mantine/core";
import React from "react";
import ProjectLinks from "./ProjectLinks";
import ProjectShort from "./ProjectShort";
import ProjectTitle from "./ProjectTitle";
import { Project } from "./types";

interface ProjectProps {
    project: Project;
}

export default ({ project }: ProjectProps) => {
    return (
        <Stack spacing={3}>
            <ProjectTitle title={project.name} />
            <ProjectLinks links={project.links} />
            <ProjectShort short={project.short} />
        </Stack>
    );
};
