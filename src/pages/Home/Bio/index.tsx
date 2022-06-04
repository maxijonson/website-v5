import { Container, createStyles, Stack, Text } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import HomeTitle from "../HomeTitle";
import useNavRegister from "../Nav/useNavRegister";

import BioImage from "./BioImage";

const useStyles = createStyles((theme) => ({
    container: {
        position: "relative",
        overflowX: "hidden",
        background: theme.colors.gray[0],
    },
    text: {
        textAlign: "center",
        fontSize: theme.fontSizes.lg,
        whiteSpace: "pre-line",
    },
}));

export default () => {
    const { t } = useTranslation(["home"]);
    const { classes } = useStyles();
    const scrollRef = useNavRegister(t("home:bio.title"));

    return (
        <Container ref={scrollRef} className={classes.container} fluid px={0}>
            <Container>
                <HomeTitle title={t("home:bio.title")} />
                <Stack spacing="xl" mx="xl" mt="xl">
                    <Text className={classes.text}>{t("home:bio.text")}</Text>
                    <BioImage />
                </Stack>
            </Container>
        </Container>
    );
};
