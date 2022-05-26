import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";

export default () => {
    const { t, i18n } = useTranslation();

    const months = React.useMemo(() => {
        return _.range(0, 11).map((i) => t(`months.${i}`));
    }, [i18n.language]);

    return months;
};
