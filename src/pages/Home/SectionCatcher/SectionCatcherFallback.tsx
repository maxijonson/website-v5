import { useMantineTheme, Container, createStyles, Text } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import HomeTitle from "../HomeTitle";

const useStyles = createStyles((theme) => ({
    container: {
        position: "relative",
        overflow: "hidden",
        minHeight: "50vh",
        background: theme.colors.red[1],
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

export default () => {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <Container className={classes.container} fluid pb="xl">
            <Container>
                <HomeTitle
                    className={classes.title}
                    color={theme.colors.red[9]}
                    dividerColor={theme.colors.red[4]}
                    title={t("home:sectionerror.title")}
                />
                <Text className={classes.text} color={theme.colors.red[9]}>
                    {t("home:sectionerror.text")}
                </Text>
            </Container>
        </Container>
    );
};
