import { Skeleton, Stack } from "@mantine/core";
import React from "react";

export default () => {
    return (
        <Stack spacing="xs">
            <Skeleton height={10} />
            <Skeleton height={15} />
            <Skeleton height={20} />
            <Skeleton height={20} />
        </Stack>
    );
};
