import {
    ActionIcon,
    Card,
    Container,
    createStyles,
    Group,
    Image,
    SimpleGrid,
    Stack,
    Text,
    useMantineTheme,
} from "@mantine/core";
import React from "react";
import _ from "lodash";
import { AiFillGithub } from "react-icons/ai";
import { DiNpm } from "react-icons/di";
import { FaFaucet } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";
import HomeTitle from "./HomeTitle";

import ImageNuclui from "../../../assets/images/projects/nuclui.png";
import ImageIntellibot from "../../../assets/images/projects/intellibot.png";
import ImagePunchBot from "../../../assets/images/projects/punchbot.png";
import ImageCuisto from "../../../assets/images/projects/cuisto.png";
import ImageReact from "../../../assets/images/projects/react.jpg";

const useStyles = createStyles((theme) => ({
    container: {
        position: "relative",
        overflowX: "hidden",
        minHeight: "100vh",
        background: theme.colors.gray[0],
    },
    transitionner: {
        position: "absolute",
        background: `linear-gradient(to left bottom, ${theme.colors.gray[2]} 49%, ${theme.colors.gray[0]} 50%)`,
        top: 0,
        left: 0,
        width: "100%",
        height: "100px",
    },
    title: {
        marginTop: "100px",
    },
    text: {
        textAlign: "center",
        fontSize: theme.fontSizes.lg,
        whiteSpace: "pre-line",
    },
    projectImageWrapper: {
        background: theme.fn.linearGradient(
            35,
            theme.colors.gray[0],
            theme.colors.gray[1]
        ),
    },
    actionIcon: {
        color: "unset !important",
    },
}));

const PROJECTS = [
    {
        name: "Nuclui",
        short: "home:projects.short.nuclui",
        image: ImageNuclui,
        links: [
            {
                icon: AiFillGithub,
                url: "https://github.com/maxijonson/nuclui",
            },
            {
                icon: DiNpm,
                url: "https://www.npmjs.com/package/nuclui",
            },
        ],
    },
    {
        name: "GeNFT",
        short: "home:projects.short.genft",
        links: [
            {
                icon: AiFillGithub,
                url: "https://github.com/maxijonson/genft",
            },
            {
                icon: DiNpm,
                url: "https://www.npmjs.com/package/genft",
            },
        ],
    },

    {
        name: "Intellibot",
        short: "home:projects.short.intellibot",
        image: ImageIntellibot,
        links: [
            {
                icon: AiFillGithub,
                url: "https://github.com/maxijonson/Intellibot",
            },
        ],
    },
    {
        name: "Punch Bot",
        short: "home:projects.short.punchbot",
        image: ImagePunchBot,
        links: [
            {
                icon: AiFillGithub,
                url: "https://github.com/maxijonson/PunchBot",
            },
        ],
    },
    {
        name: "Code Lock",
        short: "home:projects.short.codelock",
        links: [
            {
                icon: AiFillGithub,
                url: "https://github.com/maxijonson/code-lock",
            },
            {
                icon: FaFaucet,
                url: "https://www.spigotmc.org/resources/code-lock.91058/",
            },
        ],
    },
    {
        name: "Tinder Bullseye",
        short: "home:projects.short.tinderbullseye",
        links: [
            {
                icon: AiFillGithub,
                url: "https://github.com/maxijonson/tinder-bullseye",
            },
        ],
    },
    {
        name: "React (Wallpaper Engine)",
        short: "home:projects.short.react",
        image: ImageReact,
        cover: true,
        links: [
            {
                icon: AiFillGithub,
                url: "https://github.com/maxijonson/React---Wallpaper-Engine",
            },
        ],
    },
    {
        name: "Cuisto",
        short: "home:projects.short.cuisto",
        image: ImageCuisto,
        links: [
            {
                icon: AiFillGithub,
                url: "https://github.com/maxijonson/Cuisto-public",
            },
        ],
    },
];

const TextSVG = ({ text }: { text: string }) => {
    return (
        <svg
            height="160px"
            style={{
                background: "transparent",
                display: "block",
                margin: "0 auto",
                padding: "0",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
            }}
        >
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                alignmentBaseline="central"
                style={{
                    fontFamily: "Staatliches",
                    fontSize: "2rem",
                    userSelect: "none",
                }}
            >
                {text}
            </text>
        </svg>
    );
};

export default () => {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const { t } = useTranslation(["home"]);

    return (
        <Container className={classes.container} fluid>
            <div className={classes.transitionner} />
            <Container>
                <HomeTitle
                    className={classes.title}
                    title={t("home:projects.title")}
                />
                <Text className={classes.text}>
                    <Trans
                        i18nKey="home:projects.text"
                        t={t}
                        values={{ github: "Github" }}
                        components={[
                            <a href="https://github.com/maxijonson">Github</a>,
                        ]}
                    />
                </Text>
                <SimpleGrid
                    cols={3}
                    mt="lg"
                    breakpoints={[
                        { maxWidth: theme.breakpoints.md, cols: 2 },
                        { maxWidth: theme.breakpoints.sm, cols: 1 },
                    ]}
                >
                    {_.map(PROJECTS, ({ name, short, image, links, cover }) => (
                        <Card key={name} shadow="sm" p="lg" withBorder>
                            <Card.Section
                                className={classes.projectImageWrapper}
                                mb="lg"
                                style={{ height: "160px" }}
                            >
                                {image ? (
                                    <Image
                                        src={image}
                                        height={160}
                                        fit={cover ? "cover" : "contain"}
                                    />
                                ) : (
                                    <TextSVG text={name} />
                                )}
                            </Card.Section>
                            <Stack spacing={3}>
                                <Text transform="uppercase" weight={600}>
                                    {name}
                                </Text>
                                <Group spacing={0}>
                                    {_.map(links, ({ icon: Icon, url }) => (
                                        <ActionIcon
                                            key={url}
                                            className={classes.actionIcon}
                                            variant="transparent"
                                            color="gray"
                                            component="a"
                                            href={url}
                                            target="_blank"
                                        >
                                            <Icon />
                                        </ActionIcon>
                                    ))}
                                </Group>
                                <Text>{t(short)}</Text>
                            </Stack>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
        </Container>
    );
};
