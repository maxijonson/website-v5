import { Card, Group } from "@mantine/core";
import React from "react";
import EducationImage from "./EducationImage";
import EducationInfo from "./EducationInfo";
import { Education } from "./types";

interface EducationProps {
    education: Education;
}

export default ({ education }: EducationProps) => {
    return (
        <Card shadow="md" radius="lg">
            <Group>
                <EducationImage name={education.name} image={education.image} />
                <EducationInfo education={education} />
            </Group>
        </Card>
    );
};
