import React from "react";
import DateRange from "./DateRange";
import ExperienceDescription from "./ExperienceDescription";
import ExperienceJobPoints from "./ExperienceJobPoints";
import ExperiencePosition from "./ExperiencePosition";
import { Experience } from "./types";

interface ExperienceJobProps {
    job: Experience;
}

export default ({ job }: ExperienceJobProps) => {
    return (
        <>
            <DateRange from={job.from} to={job.to} />
            <ExperiencePosition position={job.position} />
            <ExperienceDescription description={job.companyDescription} />
            <ExperienceJobPoints jobPoints={job.jobPoints} />
        </>
    );
};
