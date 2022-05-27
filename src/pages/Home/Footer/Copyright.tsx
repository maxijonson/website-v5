import { Stack } from "@mantine/core";
import React from "react";
import CopyrightAttribution from "./CopyrightAttribution";
import CopyrightNotice from "./CopyrightNotice";

export default () => {
    return (
        <Stack align="center" spacing={0}>
            <CopyrightNotice />
            <CopyrightAttribution />
        </Stack>
    );
};
