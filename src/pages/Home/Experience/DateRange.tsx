import { Text } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import useMonths from "../../../hooks/useMonths";

interface DateRangeProps {
    from: Date;
    to?: Date;
}

const getDate = (date: Date, months: string[]) => {
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

export default ({ from, to }: DateRangeProps) => {
    const months = useMonths();
    const { t } = useTranslation();

    return (
        <Text size="sm">
            {getDate(from, months)}
            {" - "}
            {to ? getDate(to, months) : t("time.present")}
        </Text>
    );
};
