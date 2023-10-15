import { useTranslation } from "react-i18next";

import IconHTML from "../../../assets/images/skills/html.svg";
import IconCSS from "../../../assets/images/skills/css.svg";
import IconJavaScript from "../../../assets/images/skills/javascript.svg";
import IconTypeScript from "../../../assets/images/skills/typescript.svg";
import IconReact from "../../../assets/images/skills/react.svg";
import IconNextJS from "../../../assets/images/skills/next-js.svg";
import IconAngular from "../../../assets/images/skills/angular.svg";
import IconNodeJS from "../../../assets/images/skills/nodejs.png";

import IconJava from "../../../assets/images/skills/java.svg";
import IconCSharp from "../../../assets/images/skills/csharp.svg";
import IconPython from "../../../assets/images/skills/python.png";
import IconCpp from "../../../assets/images/skills/cpp.png";
import IconRust from "../../../assets/images/skills/rust.png";

import IconMySql from "../../../assets/images/skills/mysql.svg";
import IconOracleSql from "../../../assets/images/skills/oraclesql.png";
import IconSqlServer from "../../../assets/images/skills/sqlserver.png";
import IconMongoDB from "../../../assets/images/skills/mongodb.png";
import IconFirebase from "../../../assets/images/skills/firebase.svg";

import IconGoogleCloud from "../../../assets/images/skills/googlecloud.png";
import IconAzure from "../../../assets/images/skills/azure.png";
import IconHeroku from "../../../assets/images/skills/heroku.svg";
import IconGithubActions from "../../../assets/images/skills/githubactions.png";

import IconBash from "../../../assets/images/skills/bash.svg";
import IconAndroid from "../../../assets/images/skills/android.svg";
import IconGit from "../../../assets/images/skills/git.png";
import { SkillGroup } from "./types";

export default (): SkillGroup[] => {
    const { t } = useTranslation(["home"]);

    return [
        {
            name: t("home:skills.group.web"),
            skills: [
                { name: "HTML", proficiency: 5, logo: IconHTML },
                { name: "CSS", proficiency: 4, logo: IconCSS },
                { name: "JavaScript", proficiency: 5, logo: IconJavaScript },
                { name: "TypeScript", proficiency: 5, logo: IconTypeScript },
                { name: "React", proficiency: 5, logo: IconReact },
                { name: "NextJS", proficiency: 4, logo: IconNextJS },
                { name: "Angular", proficiency: 3, logo: IconAngular },
                { name: "NodeJS", proficiency: 4, logo: IconNodeJS },
            ],
        },
        {
            name: t("home:skills.group.application"),
            skills: [
                { name: "Java", proficiency: 3, logo: IconJava },
                { name: "C#", proficiency: 3, logo: IconCSharp },
                { name: "Python", proficiency: 3, logo: IconPython },
                { name: "C++", proficiency: 2, logo: IconCpp },
                { name: "Rust", proficiency: 1, logo: IconRust },
            ],
        },
        {
            name: t("home:skills.group.database"),
            skills: [
                { name: "MySQL", proficiency: 3, logo: IconMySql },
                { name: "Oracle SQL", proficiency: 2, logo: IconOracleSql },
                { name: "SQL Server", proficiency: 1, logo: IconSqlServer },
                { name: "MongoDB", proficiency: 2, logo: IconMongoDB },
                { name: "Firebase", proficiency: 3, logo: IconFirebase },
            ],
        },
        {
            name: t("home:skills.group.cloud"),
            skills: [
                { name: "Google Cloud", proficiency: 2, logo: IconGoogleCloud },
                { name: "Azure DevOps", proficiency: 1, logo: IconAzure },
                { name: "Heroku", proficiency: 4, logo: IconHeroku },
                {
                    name: "Github Actions",
                    proficiency: 3,
                    logo: IconGithubActions,
                },
            ],
        },
        {
            name: t("home:skills.group.other"),
            skills: [
                { name: "Bash", proficiency: 4, logo: IconBash },
                { name: "Android", proficiency: 2, logo: IconAndroid },
                { name: "Git", proficiency: 4, logo: IconGit },
            ],
        },
    ];
};
