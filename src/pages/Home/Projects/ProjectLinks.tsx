import { Group } from "@mantine/core";
import _ from "lodash";
import React from "react";
import PLink from "./ProjectLink";
import { ProjectLink } from "./types";

interface ProjectLinksProps {
    links: ProjectLink[];
}

export default ({ links }: ProjectLinksProps) => {
    return (
        <Group spacing="xs">
            {_.map(links, (link) => (
                <PLink key={link.title} link={link} />
            ))}
        </Group>
    );
};
