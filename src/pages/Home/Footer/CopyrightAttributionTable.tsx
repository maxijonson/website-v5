import { ActionIcon, createStyles, Table, Text } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaLink } from "react-icons/fa";
import useAttributions from "./useAttributions";

const useStyles = createStyles((theme) => ({
    text: {
        fontSize: theme.fontSizes.xs,

        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            fontSize: theme.fontSizes.sm,
        },
    },
}));

export default () => {
    const attributions = useAttributions();
    const { classes } = useStyles();
    const { t } = useTranslation();

    return (
        <Table striped highlightOnHover>
            <thead>
                <tr>
                    <th>{t("copyright.attribution.name")}</th>
                    <th>{t("copyright.attribution.author")}</th>
                    <th>{t("copyright.attribution.link")}</th>
                </tr>
            </thead>
            <tbody>
                {attributions.map((attribution) => (
                    <tr key={attribution.name}>
                        <td>
                            <Text className={classes.text}>
                                {attribution.name}
                            </Text>
                        </td>
                        <td>
                            <Text className={classes.text}>
                                {attribution.author}
                            </Text>
                        </td>
                        <td>
                            <ActionIcon
                                component="a"
                                href={attribution.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLink />
                            </ActionIcon>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
