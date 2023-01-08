import { Card, Center, Group, Stack, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import React from "react";
import EducationImage from "./EducationImage";
import EducationInfo from "./EducationInfo";
import { Education } from "./types";

interface EducationProps {
    education: Education;
}

export default ({ education }: EducationProps) => {
    const theme = useMantineTheme();
    const { width } = useViewportSize();

    const isDesktopSize = width >= theme.breakpoints.sm;

    return (
        <Card shadow="md" radius="lg">
            {isDesktopSize ? (
                <Group>
                    <EducationImage
                        name={education.name}
                        image={education.image}
                    />
                    <EducationInfo education={education} />
                </Group>
            ) : (
                <Stack>
                    <Center>
                        <EducationImage
                            name={education.name}
                            image={education.image}
                        />
                    </Center>
                    <EducationInfo education={education} />
                </Stack>
            )}
        </Card>
    );
};
