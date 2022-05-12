import { Container } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import React from "react";
import { useTranslation } from "react-i18next";

export default () => {
    const { height } = useViewportSize();
    const { t } = useTranslation();
    const { t: l } = useTranslation("long");

    return (
        <Container
            fluid
            pt="lg"
            sx={{ height, background: "lightgrey", color: "black" }}
        >
            <h1>{t("test")}</h1>
            <h2>{l("longtest")}</h2>
            <h3>{t("long:longtest")}</h3>
        </Container>
    );
};
