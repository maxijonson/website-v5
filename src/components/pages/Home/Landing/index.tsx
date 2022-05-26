import React from "react";
import {
    Container,
    BackgroundImage,
    Overlay,
    createStyles,
} from "@mantine/core";
import LandingVideo from "./LandingVideo";

import StaticBackground from "../../../../assets/images/landing/background.jpg";
import LandingText from "./LandingText";

const useStyles = createStyles(() => ({
    container: {
        height: "100vh",
        position: "relative",
        overflow: "hidden",
    },
    backgroundImage: {
        height: "100%",
        width: "100%",
        position: "relative",
    },
}));

export default React.forwardRef<HTMLDivElement>((_props, ref) => {
    const { classes } = useStyles();

    return (
        <Container ref={ref} className={classes.container} fluid px={0}>
            <BackgroundImage
                className={classes.backgroundImage}
                src={StaticBackground}
            >
                <LandingVideo />
                <Overlay color="#abb4bb" blur={0.6} zIndex={5} />
                <LandingText />
            </BackgroundImage>
        </Container>
    );
});
