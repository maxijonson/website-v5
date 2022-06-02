import { Container, Stack } from "@mantine/core";
import React from "react";
import EducationSkeleton from "./EducationSkeleton";

export default () => {
    return (
        <Container size="sm">
            <Stack mt="xl">
                <EducationSkeleton />
                <EducationSkeleton />
                <EducationSkeleton />
            </Stack>
        </Container>
    );
};
