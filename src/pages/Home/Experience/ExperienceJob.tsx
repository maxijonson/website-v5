import React from "react";
import { useTranslation } from "react-i18next";
import DateRange from "../../../components/DateRange";
import ExperienceDescription from "./ExperienceDescription";
import ExperienceJobPoints from "./ExperienceJobPoints";
import ExperiencePosition from "./ExperiencePosition";
import { Experience } from "./types";

interface ExperienceJobProps {
    job: Experience;
}

export default ({ job }: ExperienceJobProps) => {
    const { t } = useTranslation();

    return (
        <>
            <DateRange
                from={job.from}
                to={job.to}
                options={{ day: false, defaultTo: t("time.present") }}
            />
            <ExperiencePosition position={job.position} />
            <ExperienceDescription description={job.companyDescription} />
            <ExperienceJobPoints jobPoints={job.jobPoints} />
        </>
    );
};
