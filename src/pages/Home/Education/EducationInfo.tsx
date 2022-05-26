import { Stack } from "@mantine/core";
import React from "react";
import EducationDateRange from "./EducationDateRange";
import EducationFooter from "./EducationFooter";
import EducationTitle from "./EducationTitle";
import { Education } from "./types";

interface EducationInfoProps {
    education: Education;
}

export default ({ education }: EducationInfoProps) => {
    return (
        <Stack spacing="xs">
            <EducationTitle title={education.name} />
            <EducationDateRange
                from={education.from}
                to={education.to}
                ongoing={education.ongoing}
            />
            <EducationFooter education={education} />
        </Stack>
    );
};
