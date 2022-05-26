import { createStyles } from "@mantine/core";
import { useOs, useNetwork } from "@mantine/hooks";
import React from "react";

import VideoBackground from "../../../assets/videos/landing/background.mp4";

const useStyles = createStyles(() => ({
    video: {
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        minHeight: "100%",
        minWidth: "100%",
    },
}));

export default () => {
    const { classes } = useStyles();
    const os = useOs();
    const network = useNetwork();
    const playVideo = os !== "ios" && os !== "android" && !network.saveData;

    if (!playVideo) {
        return null;
    }

    return (
        <video
            className={classes.video}
            autoPlay
            loop
            muted
            playsInline
            src={VideoBackground}
        />
    );
};
