import React from "react";
import _ from "lodash";
import { Container, createStyles, Text, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import HomeTitle from "../HomeTitle";
import Transitionner from "../../../components/Transitionner";
import LazyLoad from "../../../components/LazyLoad";
import SkillsGridSkeleton from "./SkillsGridSkeleton";

const SkillsGrid = React.lazy(() => import("./SkillsGrid"));

const useStyles = createStyles((theme) => ({
    container: {
        position: "relative",
        overflowX: "hidden",
        minHeight: "100vh",
        background: theme.colors.gray[2],
    },
    title: {
        marginTop: "100px",
    },
    text: {
        textAlign: "center",
        fontSize: theme.fontSizes.lg,
        whiteSpace: "pre-line",
    },
}));

export default React.forwardRef<HTMLDivElement>((_props, ref) => {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const { height: vh } = useViewportSize();
    const { t } = useTranslation();

    return (
        <Container ref={ref} className={classes.container} fluid pb="xl">
            <Transitionner
                type="rounddown"
                from={theme.colors.gray[0]}
                to={theme.colors.gray[2]}
            />
            <Container>
                <HomeTitle
                    className={classes.title}
                    title={t("home:skills.title")}
                />
                <Text className={classes.text}>{t("home:skills.text")}</Text>
                <LazyLoad fallback={<SkillsGridSkeleton />} margin={0.5 * vh}>
                    <SkillsGrid />
                </LazyLoad>
            </Container>
        </Container>
    );
});
