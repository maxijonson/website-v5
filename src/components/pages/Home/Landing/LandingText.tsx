import { Center, Text, Divider, createStyles } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";

const useStyles = createStyles((theme) => ({
    center: {
        width: "100%",
        height: "100%",
        zIndex: 10,
        position: "absolute",
    },
    textWrapper: {
        textShadow: `${theme.colors.cyan[0]} 0px 0px 12px, #505a63 0px 6px 0.5em`,
        textAlign: "center",
        color: theme.colors.dark[6],
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
        boxShadow: `${theme.colors.cyan[0]} 0px 0px 8px, #505a63 0px 6px 0.5em`,
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
    const { t } = useTranslation();
    const { classes } = useStyles();

    return (
        <Center className={classes.center}>
            <Text className={classes.textWrapper}>
                <Text className={classes.textTitle}>Tristan Chin</Text>
                <Divider className={classes.divider} size="xs" color="dark" />
                <Text className={classes.textSubtitle}>
                    {t("home:landing.subtitle")}
                </Text>
            </Text>
        </Center>
    );
};
