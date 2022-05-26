import { Group, Text } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import DateRange from "../../../components/DateRange";

interface EducationDateRangeProps {
    from?: Date;
    to?: Date;
    ongoing?: boolean;
}

export default ({ from, to, ongoing }: EducationDateRangeProps) => {
    const { t } = useTranslation();
    return (
        <Group spacing={2}>
            <DateRange from={from} to={to} options={{ day: false }} />
            {ongoing && <Text size="sm">{`(${t("time.expected")})`}</Text>}
        </Group>
    );
};
