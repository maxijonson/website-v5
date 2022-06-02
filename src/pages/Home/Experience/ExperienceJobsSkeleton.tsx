import { Container, Skeleton, Timeline, TimelineItem } from "@mantine/core";
import React from "react";
import ExperienceJobSkeleton from "./ExperienceJobSkeleton";

export default () => {
    return (
        <Container size="sm">
            <Timeline mt="xl">
                <TimelineItem
                    title={<Skeleton height={25} />}
                    bullet={<Skeleton circle width={16} />}
                >
                    <ExperienceJobSkeleton />
                </TimelineItem>
                <TimelineItem
                    title={<Skeleton height={25} />}
                    bullet={<Skeleton circle width={16} />}
                >
                    <ExperienceJobSkeleton />
                </TimelineItem>
                {/* {jobs.map((job) => (
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
                ))} */}
            </Timeline>
        </Container>
    );
};
