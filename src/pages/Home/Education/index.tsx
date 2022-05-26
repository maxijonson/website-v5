import { Container, createStyles, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import HomeTitle from "../HomeTitle";
import Transitionner from "../../../components/Transitionner";
import Educations from "./Educations";
import useEducation from "./useEducation";

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
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const educations = useEducation();

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
                <Educations educations={educations} />
            </Container>
            <Transitionner
                type="roundup"
                from={theme.colors.gray[0]}
                to={theme.colors.gray[2]}
            />
        </Container>
    );
});
