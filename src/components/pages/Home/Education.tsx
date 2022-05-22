import {
    Card,
    Container,
    createStyles,
    Group,
    Image,
    Stack,
    Text,
} from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import HomeTitle from "./HomeTitle";

import ImageETS from "../../../assets/images/education/ets.png";
import ImageCLG from "../../../assets/images/education/clg.png";
import ImageAngular from "../../../assets/images/education/angular.jpg";
import ImagePython from "../../../assets/images/education/python.jpg";
import ImageReact from "../../../assets/images/education/react.jpg";
import ImageNode from "../../../assets/images/education/node.jpg";

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
    },
    image: {
        "& img": {
            marginBottom: 0,
        },
    },
    location: {
        fontStyle: "italic",
    },
}));

const useEducation = () => {
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

const useGetDateRange = () => {
    const { t } = useTranslation();

    return ({ from, to, ongoing }: ReturnType<typeof useEducation>[0]) => {
        if (!from && !to) return "";
        const fromStr = from
            ? `${t(`months.${from.getMonth()}`)} ${from.getFullYear()}`
            : "";
        const toStr = to
            ? `${t(`months.${to.getMonth()}`)} ${to.getFullYear()}`
            : "";
        const ongoingStr = (() => {
            if (!ongoing) return "";
            if (toStr) return ` (${t("time.expected")})`;
            return ` - ${t("time.present")}`;
        })();

        if (from && to) {
            return `${fromStr} - ${toStr}${ongoingStr}`;
        }
        if (from) {
            return `${fromStr}${ongoingStr}`;
        }
        if (to) {
            return `${toStr}${ongoingStr}`;
        }
        return "";
    };
};

export default () => {
    const { t } = useTranslation(["home"]);
    const { classes } = useStyles();
    const education = useEducation();
    const getDateRange = useGetDateRange();

    return (
        <Container className={classes.container} fluid>
            <div className={classes.transitionner} />
            <Container>
                <HomeTitle
                    className={classes.title}
                    title={t("home:education.title")}
                />
                <Text className={classes.text}>{t("home:education.text")}</Text>
                <Container size="sm">
                    <Stack mt="xl">
                        {education.map((item) => (
                            <Card key={item.name} shadow="md" radius="lg">
                                <Group>
                                    <Image
                                        className={classes.image}
                                        radius={0}
                                        width="128px"
                                        src={item.image}
                                    />
                                    <Stack spacing="xs">
                                        <Text size="lg" weight="bold">
                                            {item.name}
                                        </Text>
                                        <Text size="sm">
                                            {getDateRange(item)}
                                        </Text>
                                        <Text
                                            className={classes.location}
                                            size="sm"
                                        >
                                            {item.type} - {item.location}
                                        </Text>
                                    </Stack>
                                </Group>
                            </Card>
                        ))}
                    </Stack>
                </Container>
            </Container>
        </Container>
    );
};
