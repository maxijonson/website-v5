import React from "react";
import { Global } from "@mantine/core";

export default () => {
    return (
        <Global
            styles={() => ({
                // TODO: Add overflow scrollbar when this PR is merged: https://github.com/KingSora/OverlayScrollbars/pull/435
            })}
        />
    );
};
