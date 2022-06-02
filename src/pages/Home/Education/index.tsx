import { Container, createStyles, Text, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import React from "react";
import { useTranslation } from "react-i18next";
import HomeTitle from "../HomeTitle";
import Transitionner from "../../../components/Transitionner";
import LazyLoad from "../../../components/LazyLoad";
import EducationsSkeleton from "./EducationsSkeleton";

const Educations = React.lazy(() => import("./Educations"));

const useStyles = createStyles((theme) => ({
    container: {
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        background: theme.colors.gray[0],
    },
    content: {
        marginBottom: "100px",
    },
    title: {
        marginTop: "calc(5vh + 12px)",
    },
    text: {
        textAlign: "center",
        fontSize: theme.fontSizes.lg,
    },
}));

export default React.forwardRef<HTMLDivElement>((_props, ref) => {
    const { t } = useTranslation(["translation", "home"]);
    const { height: vh } = useViewportSize();
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <Container ref={ref} className={classes.container} fluid pb="xl">
            <Transitionner
                type="slantdesc"
                from={theme.colors.gray[2]}
                to={theme.colors.gray[0]}
            />
            <Container className={classes.content}>
                <HomeTitle
                    className={classes.title}
                    title={t("home:education.title")}
                />
                <Text className={classes.text}>{t("home:education.text")}</Text>
                <LazyLoad fallback={<EducationsSkeleton />} margin={0.5 * vh}>
                    <Educations />
                </LazyLoad>
            </Container>
            <Transitionner
                type="roundup"
                from={theme.colors.gray[0]}
                to={theme.colors.gray[2]}
            />
        </Container>
    );
});
