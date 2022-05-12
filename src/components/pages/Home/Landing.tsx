import React from "react";
import {
    Container,
    BackgroundImage,
    Center,
    Text,
    Overlay,
    Divider,
    createStyles,
} from "@mantine/core";
import { useOs, useViewportSize, useNetwork } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import StaticBackground from "../../../assets/images/Home_Landing_Background.jpg";
import VideoBackground from "../../../assets/videos/Home_Landing_Video.mp4";

interface UseStyleProps {
    containerHeight: number;
}

const useStyles = createStyles((theme, { containerHeight }: UseStyleProps) => ({
    container: {
        height: containerHeight,
        position: "relative",
        overflow: "hidden",
    },
    video: {
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        minHeight: "100%",
        minWidth: "100%",
    },
    backgroundImage: {
        height: "100%",
        width: "100%",
        position: "relative",
    },
    center: {
        width: "100%",
        height: "100%",
        zIndex: 10,
        position: "absolute",
    },
    textWrapper: {
        textShadow: "#505a63 0px 6px 0.5em",
        textAlign: "center",
        color: theme.colors.dark[5],
    },
    textTitle: {
        fontSize: "3rem",
        textTransform: "uppercase",
        fontWeight: 600,

        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: "5rem",
        },

        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            fontSize: "6rem",
        },
    },
    divider: {
        margin: "0 64px",
    },
    textSubtitle: {
        fontSize: "1rem",

        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: "1.2rem",
        },

        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            fontSize: "1.4rem",
        },
    },
}));

export default () => {
    const { height } = useViewportSize();
    const os = useOs();
    const network = useNetwork();
    const { classes } = useStyles({ containerHeight: height });
    const { t } = useTranslation(["home"]);

    const playVideo = os !== "ios" && os !== "android" && !network.saveData;

    return (
        <Container className={classes.container} fluid px={0}>
            <BackgroundImage
                className={classes.backgroundImage}
                src={StaticBackground}
            >
                {playVideo && (
                    <video
                        className={classes.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={VideoBackground}
                    />
                )}
                <Overlay color="#abb4bb" blur={0.6} zIndex={5} />
                <Center className={classes.center}>
                    <Text className={classes.textWrapper}>
                        <Text className={classes.textTitle}>Tristan Chin</Text>
                        <Divider
                            className={classes.divider}
                            size="xs"
                            color="dark"
                        />
                        <Text className={classes.textSubtitle}>
                            {t("home:landing.subtitle")}
                        </Text>
                    </Text>
                </Center>
            </BackgroundImage>
        </Container>
    );
};
