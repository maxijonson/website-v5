import { Card, Stack, Skeleton } from "@mantine/core";
import _ from "lodash";
import React from "react";

export default () => {
    return (
        <Card shadow="sm" withBorder>
            <Stack>
                <Skeleton height={100} />
                <Skeleton height={30} />
                <Skeleton height={25} />
                <Skeleton height={10} />
                <Skeleton height={10} />
            </Stack>
        </Card>
    );
};
