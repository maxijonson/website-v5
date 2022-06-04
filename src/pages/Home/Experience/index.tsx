import { Container, createStyles, Text, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import React from "react";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import HomeTitle from "../HomeTitle";
import Transitionner from "../../../components/Transitionner";
import LazyLoad from "../../../components/LazyLoad";
import ExperienceJobsSkeleton from "./ExperienceJobsSkeleton";
import useNavRegister from "../Nav/useNavRegister";

const ExperienceJobs = React.lazy(() => import("./ExperienceJobs"));

const useStyles = createStyles((theme) => ({
    container: {
        position: "relative",
        overflowX: "hidden",
        minHeight: "100vh",
        background: theme.colors.gray[2],
    },
    title: {
        marginTop: "calc(5vh + 12px)",
    },
    text: {
        textAlign: "center",
        fontSize: theme.fontSizes.lg,
        whiteSpace: "pre-line",
    },
}));

export default () => {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const { height: vh } = useViewportSize();
    const { t } = useTranslation(["translation", "home"]);
    const scrollRef = useNavRegister(t("home:experience.title"));

    return (
        <Container ref={scrollRef} className={classes.container} fluid pb="xl">
            <Transitionner
                type="slantasc"
                from={theme.colors.gray[0]}
                to={theme.colors.gray[2]}
            />
            <Container>
                <HomeTitle
                    className={classes.title}
                    title={t("home:experience.title")}
                />
                <Text className={classes.text}>
                    {t("home:experience.text")}
                </Text>
                <LazyLoad
                    fallback={<ExperienceJobsSkeleton />}
                    margin={0.5 * vh}
                >
                    <ExperienceJobs />
                </LazyLoad>
            </Container>
        </Container>
    );
};
