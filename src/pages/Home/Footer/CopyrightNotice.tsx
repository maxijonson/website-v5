import { Group, Text } from "@mantine/core";
import { t } from "i18next";
import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const INITIAL_YEAR = 2022;

export default () => {
    return (
        <Group spacing="xs">
            <FaRegCopyright />
            <Text>
                {`${INITIAL_YEAR}${
                    new Date().getFullYear() !== INITIAL_YEAR
                        ? ` - ${new Date().getFullYear()}`
                        : ""
                }`}
            </Text>
            <Text>Tristan Chin</Text>
            <Text>
                <>{t("copyright.rights")}*</>
            </Text>
        </Group>
    );
};
