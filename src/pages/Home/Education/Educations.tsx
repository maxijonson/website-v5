import { Container, Stack } from "@mantine/core";
import React from "react";
import Edu from "./Education";
import { Education } from "./types";

interface EducationsProps {
    educations: Education[];
}

export default ({ educations }: EducationsProps) => {
    return (
        <Container size="sm">
            <Stack mt="xl">
                {educations.map((education) => (
                    <Edu key={education.name} education={education} />
                ))}
            </Stack>
        </Container>
    );
};
