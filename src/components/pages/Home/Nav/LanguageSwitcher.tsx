import { Group } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import HeaderAnchor from "./HeaderAnchor";

export default () => {
    const { i18n } = useTranslation();

    return (
        <Group>
            <HeaderAnchor
                onClick={() =>
                    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en")
                }
            >
                {i18n.language === "en" ? "FR" : "EN"}
            </HeaderAnchor>
        </Group>
    );
};
