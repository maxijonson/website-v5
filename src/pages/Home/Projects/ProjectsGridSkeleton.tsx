import { useMantineTheme, SimpleGrid } from "@mantine/core";
import _ from "lodash";
import React from "react";
import ProjectSkeleton from "./ProjectSkeleton";

export default () => {
    const theme = useMantineTheme();

    return (
        <SimpleGrid
            cols={3}
            mt="lg"
            breakpoints={[
                { maxWidth: theme.breakpoints.md, cols: 2 },
                { maxWidth: theme.breakpoints.sm, cols: 1 },
            ]}
        >
            {_.times(8, (i) => (
                <ProjectSkeleton key={i} />
            ))}
        </SimpleGrid>
    );
};
