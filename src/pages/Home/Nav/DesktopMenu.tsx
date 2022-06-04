import { Group } from "@mantine/core";
import _ from "lodash";
import React from "react";
import HeaderAnchor from "./HeaderAnchor";
import NavContext from "./NavContext";

interface DesktopMenuProps {
    hidden?: boolean;
}

export default ({ hidden = false }: DesktopMenuProps) => {
    const { headers } = React.useContext(NavContext);

    if (hidden) {
        return null;
    }

    return (
        <Group>
            {_.map(headers, (header) => (
                <HeaderAnchor
                    key={header.name}
                    onClick={() => header.scrollIntoView()}
                >
                    {header.name}
                </HeaderAnchor>
            ))}
        </Group>
    );
};
