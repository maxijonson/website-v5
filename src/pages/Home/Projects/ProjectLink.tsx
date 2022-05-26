import { ActionIcon } from "@mantine/core";
import React from "react";
import { ProjectLink } from "./types";

interface ProjectLinkProps {
    link: ProjectLink;
}

export default ({ link }: ProjectLinkProps) => {
    return (
        <ActionIcon
            key={link.url}
            variant="hover"
            color="dark"
            component="a"
            href={link.url}
            target="_blank"
            title={link.title}
            size="md"
            radius="xl"
            p={2}
        >
            <link.icon size="100%" />
        </ActionIcon>
    );
};
