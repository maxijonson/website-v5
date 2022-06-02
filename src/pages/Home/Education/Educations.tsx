import { Container, Stack } from "@mantine/core";
import React from "react";
import Education from "./Education";
import useEducation from "./useEducation";

export default () => {
    const educations = useEducation();

    return (
        <Container size="sm">
            <Stack mt="xl">
                {educations.map((education) => (
                    <Education key={education.name} education={education} />
                ))}
            </Stack>
        </Container>
    );
};
