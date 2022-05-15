import React from "react";
import _ from "lodash";
import {
    Card,
    Container,
    createStyles,
    Group,
    Image,
    SimpleGrid,
    Stack,
    Text,
    Tooltip,
    useMantineTheme,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import HomeTitle from "./HomeTitle";

import IconHTML from "../../../assets/images/skills/html.svg";
import IconCSS from "../../../assets/images/skills/css.svg";
import IconJavaScript from "../../../assets/images/skills/javascript.svg";
import IconTypeScript from "../../../assets/images/skills/typescript.svg";
import IconReact from "../../../assets/images/skills/react.svg";
import IconAngular from "../../../assets/images/skills/angular.svg";
import IconNodeJS from "../../../assets/images/skills/nodejs.png";

import IconJava from "../../../assets/images/skills/java.svg";
import IconCSharp from "../../../assets/images/skills/csharp.svg";
import IconPython from "../../../assets/images/skills/python.png";

import IconMySql from "../../../assets/images/skills/mysql.svg";
import IconOracleSql from "../../../assets/images/skills/oraclesql.png";
import IconSqlServer from "../../../assets/images/skills/sqlserver.png";
import IconMongoDB from "../../../assets/images/skills/mongodb.png";
import IconFirebase from "../../../assets/images/skills/firebase.svg";

import IconGoogleCloud from "../../../assets/images/skills/googlecloud.png";
import IconAzure from "../../../assets/images/skills/azure.png";

import IconBash from "../../../assets/images/skills/bash.svg";
import IconAndroid from "../../../assets/images/skills/android.svg";
import IconGit from "../../../assets/images/skills/git.png";

const useStyles = createStyles((theme) => ({
    container: {
        position: "relative",
        overflowX: "hidden",
        minHeight: "100vh",
        background: theme.colors.gray[2],
    },
    transitionner: {
        position: "absolute",
        background: theme.colors.gray[0],
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "0 0 100% 100%",
        top: "-150px",
        width: "150vw",
        height: "200px",

        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            top: "-436px",
            width: "150vw",
            height: "500px",
        },
    },
    content: {},
    title: {
        marginTop: "100px",
    },
    text: {
        textAlign: "center",
        fontSize: theme.fontSizes.lg,
        whiteSpace: "pre-line",
    },
    groupTitle: {
        marginTop: "0px !important",
    },
    skillText: {
        maxWidth: "unset",
    },
    skillTooltip: {
        flexGrow: "unset",
    },
    disabledProficiency: {
        filter: "grayscale(100%)",
        opacity: "0.25",
    },
}));

const skills = [
    {
        group: "home:skills.group.web",
        items: [
            { name: "HTML", proficiency: 5, logo: IconHTML },
            { name: "CSS", proficiency: 4, logo: IconCSS },
            { name: "JavaScript", proficiency: 5, logo: IconJavaScript },
            { name: "TypeScript", proficiency: 5, logo: IconTypeScript },
            { name: "React", proficiency: 5, logo: IconReact },
            { name: "Angular", proficiency: 3, logo: IconAngular },
            { name: "NodeJS", proficiency: 4, logo: IconNodeJS },
        ],
    },
    {
        group: "home:skills.group.application",
        items: [
            { name: "Java", proficiency: 3, logo: IconJava },
            { name: "C#", proficiency: 3, logo: IconCSharp },
            { name: "Python", proficiency: 3, logo: IconPython },
        ],
    },
    {
        group: "home:skills.group.database",
        items: [
            { name: "MySQL", proficiency: 3, logo: IconMySql },
            { name: "Oracle SQL", proficiency: 2, logo: IconOracleSql },
            { name: "SQL Server", proficiency: 1, logo: IconSqlServer },
            { name: "MongoDB", proficiency: 2, logo: IconMongoDB },
            { name: "Firebase", proficiency: 3, logo: IconFirebase },
        ],
    },
    {
        group: "home:skills.group.cloud",
        items: [
            { name: "Google Cloud", proficiency: 3, logo: IconGoogleCloud },
            { name: "Azure DevOps", proficiency: 1, logo: IconAzure },
        ],
    },
    {
        group: "home:skills.group.other",
        items: [
            { name: "Bash", proficiency: 4, logo: IconBash },
            { name: "Android", proficiency: 2, logo: IconAndroid },
            { name: "Git", proficiency: 4, logo: IconGit },
        ],
    },
];

export default () => {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const { t } = useTranslation();

    return (
        <Container className={classes.container} fluid>
            <div className={classes.transitionner} />
            <Container className={classes.content}>
                <div className={classes.title}>
                    <HomeTitle title={t("home:skills.title")} />
                    <Text className={classes.text}>
                        {t("home:skills.text")}
                    </Text>
                    <SimpleGrid
                        cols={3}
                        mt="lg"
                        breakpoints={[
                            { maxWidth: theme.breakpoints.md, cols: 2 },
                            { maxWidth: theme.breakpoints.sm, cols: 1 },
                        ]}
                    >
                        {_.map(skills, ({ group, items }) => (
                            <Card key={group} shadow="sm" withBorder>
                                <Stack>
                                    <HomeTitle
                                        className={classes.groupTitle}
                                        order={2}
                                        title={t(group)}
                                        align="left"
                                    />
                                    {_.map(items, (item) => (
                                        <Group key={item.name} grow noWrap>
                                            <Text className={classes.skillText}>
                                                {item.name}
                                            </Text>
                                            <Tooltip
                                                className={classes.skillTooltip}
                                                label={t(
                                                    `home:skills.proficiency.${item.proficiency}`
                                                )}
                                                withArrow
                                                arrowDistance={10}
                                                transition="pop"
                                            >
                                                <Group spacing={1}>
                                                    {_.times(
                                                        item.proficiency,
                                                        (i) => (
                                                            <Image
                                                                key={i}
                                                                radius={0}
                                                                width="16px"
                                                                src={item.logo}
                                                            />
                                                        )
                                                    )}
                                                    {_.times(
                                                        5 - item.proficiency,
                                                        (i) => (
                                                            <Image
                                                                key={i}
                                                                className={
                                                                    classes.disabledProficiency
                                                                }
                                                                radius={0}
                                                                width="16px"
                                                                src={item.logo}
                                                            />
                                                        )
                                                    )}
                                                </Group>
                                            </Tooltip>
                                        </Group>
                                    ))}
                                </Stack>
                            </Card>
                        ))}
                    </SimpleGrid>
                </div>
            </Container>
        </Container>
    );
};
