import { useTranslation } from "react-i18next";
import { Experience } from "./types";

import LogoDesjardins from "../../../assets/images/experience/desjardins.jpg";
import LogoIpnos from "../../../assets/images/experience/ipnos.jpg";
import LogoComact from "../../../assets/images/experience/comact.jpg";

export default (): Experience[] => {
    const { t } = useTranslation(["home"]);

    return [
        {
            company: "Desjardins",
            companyDescription: t(
                "home:experience.jobs.desjardins.description"
            ),
            logo: LogoDesjardins,
            from: new Date(2022, 4),
            position: t("home:experience.jobs.desjardins.position"),
        },
        {
            company: "Ipnos",
            companyDescription: t("home:experience.jobs.ipnos.description"),
            logo: LogoIpnos,
            from: new Date(2021, 4),
            to: new Date(2021, 7),
            position: t("home:experience.jobs.ipnos.position"),
            jobPoints: [
                t("home:experience.jobs.ipnos.points.0"),
                t("home:experience.jobs.ipnos.points.1"),
                t("home:experience.jobs.ipnos.points.2"),
            ],
        },
        {
            company: "Comact",
            companyDescription: t("home:experience.jobs.comact.description"),
            logo: LogoComact,
            from: new Date(2020, 0),
            to: new Date(2020, 4),
            position: t("home:experience.jobs.comact.position.0"),
            jobPoints: [
                t("home:experience.jobs.comact.points.0.0"),
                t("home:experience.jobs.comact.points.0.1"),
            ],
        },
        {
            company: t("home:experience.jobs.comact.name"),
            logo: LogoComact,
            from: new Date(2019, 5),
            to: new Date(2019, 8),
            position: t("home:experience.jobs.comact.position.1"),
            jobPoints: [
                t("home:experience.jobs.comact.points.1.0"),
                t("home:experience.jobs.comact.points.1.1"),
            ],
        },
        {
            company: t("home:experience.jobs.comact.name"),
            logo: LogoComact,
            from: new Date(2019, 0),
            to: new Date(2019, 4),
            position: t("home:experience.jobs.comact.position.2"),
            jobPoints: [
                t("home:experience.jobs.comact.points.2.0"),
                t("home:experience.jobs.comact.points.2.1"),
                t("home:experience.jobs.comact.points.2.2"),
            ],
        },
    ];
};
