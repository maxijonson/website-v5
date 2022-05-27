import { Group, Text } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaRegCopyright } from "react-icons/fa";

const INITIAL_YEAR = 2022;

export default () => {
    const { t } = useTranslation();

    return (
        <Group position="center" spacing="xs">
            <FaRegCopyright />
            <Text>
                {`${INITIAL_YEAR}${
                    new Date().getFullYear() !== INITIAL_YEAR
                        ? ` - ${new Date().getFullYear()}`
                        : ""
                }`}
            </Text>
            <Text>Tristan Chin</Text>
            <Text>{t("copyright.rights")}</Text>
        </Group>
    );
};
