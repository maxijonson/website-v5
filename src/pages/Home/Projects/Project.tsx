import { Card } from "@mantine/core";
import React from "react";
import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";
import { Project } from "./types";

interface ProjectProps {
    project: Project;
}

export default ({ project }: ProjectProps) => {
    return (
        <Card key={project.name} shadow="sm" p="lg" withBorder>
            <ProjectImage
                name={project.name}
                image={project.image}
                cover={project.cover}
            />
            <ProjectInfo project={project} />
        </Card>
    );
};
