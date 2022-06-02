import { Card, Group, Skeleton, Stack } from "@mantine/core";
import React from "react";

export default () => {
    return (
        <Card shadow="md" radius="lg">
            <Group>
                <Skeleton height={64} width={128} />
                <Stack style={{ flexGrow: 1 }}>
                    <Skeleton height={30} />
                    <Skeleton height={10} />
                    <Skeleton height={10} />
                </Stack>
            </Group>
        </Card>
    );
};
