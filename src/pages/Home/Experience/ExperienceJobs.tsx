import { Container, createStyles, Timeline, TimelineItem } from "@mantine/core";
import React from "react";
import ExperienceJob from "./ExperienceJob";
import ExperienceLogo from "./ExperienceLogo";
import { Experience } from "./types";

interface ExperienceTimelineProps {
    jobs: Experience[];
}

const useStyles = createStyles((theme) => ({
    timeline: {
        "& .mantine-Timeline-itemTitle": {
            fontWeight: "bold",
            fontSize: theme.fontSizes.lg,
        },
    },
}));

export default ({ jobs }: ExperienceTimelineProps) => {
    const { classes } = useStyles();

    return (
        <Container size="sm">
            <Timeline className={classes.timeline} mt="xl">
                {jobs.map((job) => (
                    <TimelineItem
                        key={`${job.company}-${job.from.toISOString()}`}
                        title={job.company}
                        bullet={
                            <ExperienceLogo
                                name={job.company}
                                logo={job.logo}
                            />
                        }
                    >
                        <ExperienceJob job={job} />
                    </TimelineItem>
                ))}
            </Timeline>
        </Container>
    );
};
