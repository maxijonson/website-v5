import { Container, Skeleton, Timeline, TimelineItem } from "@mantine/core";
import _ from "lodash";
import React from "react";
import ExperienceJobSkeleton from "./ExperienceJobSkeleton";

export default () => {
    return (
        <Container size="sm">
            <Timeline mt="xl">
                {_.times(3, (i) => (
                    <TimelineItem
                        key={i}
                        title={<Skeleton height={25} />}
                        bullet={<Skeleton circle width={16} />}
                    >
                        <ExperienceJobSkeleton />
                    </TimelineItem>
                ))}
            </Timeline>
        </Container>
    );
};
