import { Group } from "@mantine/core";
import _ from "lodash";
import React from "react";
import HeaderAnchor from "./HeaderAnchor";
import { NavHeader } from "./types";

interface DesktopMenuProps {
    headers: NavHeader[];
    hidden?: boolean;
}

export default ({ headers, hidden = false }: DesktopMenuProps) => {
    if (hidden) {
        return null;
    }

    return (
        <Group>
            {_.map(headers, (header) => (
                <HeaderAnchor
                    key={header.name}
                    onClick={() => header.element.scrollIntoView()}
                >
                    {header.name}
                </HeaderAnchor>
            ))}
        </Group>
    );
};
