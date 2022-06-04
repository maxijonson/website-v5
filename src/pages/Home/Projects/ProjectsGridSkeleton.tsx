import { useMantineTheme, SimpleGrid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import _ from "lodash";
import React from "react";
import ProjectSkeleton from "./ProjectSkeleton";

export default () => {
    const theme = useMantineTheme();
    const { width } = useViewportSize();

    const groups = React.useMemo(() => {
        if (width <= theme.breakpoints.sm) {
            return 1;
        }
        if (width <= theme.breakpoints.md) {
            return 2;
        }
        return 3;
    }, [theme.breakpoints.md, theme.breakpoints.sm, width]);

    return (
        <SimpleGrid
            cols={3}
            mt="lg"
            breakpoints={[
                { maxWidth: theme.breakpoints.md, cols: 2 },
                { maxWidth: theme.breakpoints.sm, cols: 1 },
            ]}
        >
            {_.times(groups, (i) => (
                <ProjectSkeleton key={i} />
            ))}
        </SimpleGrid>
    );
};
