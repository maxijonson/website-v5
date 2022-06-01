import { Card, Skeleton, Stack } from "@mantine/core";
import _ from "lodash";
import React from "react";

export default () => {
    return (
        <Card shadow="sm" withBorder>
            <Stack>
                <Skeleton height={25} />
                {_.times(3, (i) => (
                    <Skeleton height={10} key={i} />
                ))}
            </Stack>
        </Card>
    );
};
