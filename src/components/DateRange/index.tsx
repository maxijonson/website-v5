import { Text } from "@mantine/core";
import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";
import useMonths from "../../hooks/useMonths";

interface UseGetDateOptions {
    day?: boolean;
    month?: boolean;
    year?: boolean;
    default?: string | null;
}

interface DateRangeProps {
    from?: Date;
    to?: Date;
    options?: UseGetDateOptions & {
        defaultTo?: string | null;
        defaultFrom?: string | null;
    };
}

const useGetDateStr = (options: UseGetDateOptions = {}) => {
    const { i18n } = useTranslation();
    const months = useMonths();
    const en = i18n.language === "en";

    const showDay = options.day ?? true;
    const showMonth = options.month ?? true;
    const showYear = options.year ?? true;

    return (date?: Date) => {
        if (!date) return options.default ?? "";
        const year = date.getFullYear();
        const month = months[date.getMonth()];
        const day = date.getDate();

        if (showDay) {
            if (showMonth) {
                if (showYear) {
                    return en
                        ? `${month} ${day} ${year}`
                        : `${day} ${month} ${year}`;
                }
                return en ? `${month} ${day}` : `${day} ${month}`;
            }
            if (showYear) {
                return `${day} ${year}`;
            }
            return `${day}`;
        }

        if (showMonth) {
            if (showYear) {
                return `${month} ${year}`;
            }
            return `${month}`;
        }

        if (showYear) {
            return `${year}`;
        }

        return options.default ?? "";
    };
};

export default ({ from, to, options }: DateRangeProps) => {
    const getDateStrFrom = useGetDateStr({
        ...options,
        default: options?.defaultFrom ?? options?.default,
    });
    const getDateStrTo = useGetDateStr({
        ...options,
        default: options?.defaultTo ?? options?.default,
    });

    const dateRangeStr = _([getDateStrFrom(from), getDateStrTo(to)])
        .compact()
        .join(" - ");

    return <Text size="sm">{dateRangeStr}</Text>;
};
