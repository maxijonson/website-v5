import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";

export default () => {
    const { t } = useTranslation();

    const months = React.useMemo(() => {
        return _.range(0, 11).map((i) => t(`months.${i}`));
    }, [t]);

    return months;
};
