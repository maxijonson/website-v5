import { useTranslation } from "react-i18next";

import ImageETS from "../../../assets/images/education/ets.png";
import ImageCLG from "../../../assets/images/education/clg.png";
import ImageAngular from "../../../assets/images/education/angular.jpg";
import ImagePython from "../../../assets/images/education/python.jpg";
import ImageReact from "../../../assets/images/education/react.jpg";
import ImageNode from "../../../assets/images/education/node.jpg";
import { Education } from "./types";

export default (): Education[] => {
    const { t } = useTranslation(["home"]);

    return [
        {
            name: t("home:education.name.bengse"),
            image: ImageETS,
            type: t("home:education.type.university"),
            location: "École de Technologie Supérieure",
            from: new Date(2019, 8),
            to: new Date(2023, 7),
            ongoing: true,
        },
        {
            name: t("home:education.name.compsci"),
            image: ImageCLG,
            type: t("home:education.type.college"),
            location: "Collège Lionel-Groulx",
            from: new Date(2016, 7),
            to: new Date(2019, 5),
        },
        {
            name: t("home:education.name.angular"),
            image: ImageAngular,
            type: t("home:education.type.online"),
            location: "Udemy",
            to: new Date(2021, 4),
        },
        {
            name: t("home:education.name.python"),
            image: ImagePython,
            type: t("home:education.type.online"),
            location: "Udemy",
            to: new Date(2020, 1),
        },
        {
            name: t("home:education.name.react"),
            image: ImageReact,
            type: t("home:education.type.online"),
            location: "Udemy",
            to: new Date(2019, 0),
        },
        {
            name: t("home:education.name.node"),
            image: ImageNode,
            type: t("home:education.type.online"),
            location: "Udemy",
            to: new Date(2018, 5),
        },
    ];
};
