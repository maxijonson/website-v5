import { Container, Stack } from "@mantine/core";
import _ from "lodash";
import React from "react";
import EducationSkeleton from "./EducationSkeleton";

export default () => {
    return (
        <Container size="sm">
            <Stack mt="xl">
                {_.times(6, (i) => (
                    <EducationSkeleton key={i} />
                ))}
            </Stack>
        </Container>
    );
};
