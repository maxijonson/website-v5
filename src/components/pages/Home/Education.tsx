import {
    Card,
    Container,
    createStyles,
    Group,
    Image,
    Stack,
    Text,
    useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import HomeTitle from "./HomeTitle";
import Transitionner from "../../../components/Transitionner";

import ImageETS from "../../../assets/images/education/ets.png";
import ImageCLG from "../../../assets/images/education/clg.png";
import ImageAngular from "../../../assets/images/education/angular.jpg";
import ImagePython from "../../../assets/images/education/python.jpg";
import ImageReact from "../../../assets/images/education/react.jpg";
import ImageNode from "../../../assets/images/education/node.jpg";

const useStyles = createStyles((theme) => ({
    container: {
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        background: theme.colors.gray[0],
    },
    content: {
        marginBottom: "100px",
    },
    title: {
        marginTop: "calc(5vh + 12px)",
    },
    text: {
        textAlign: "center",
        fontSize: theme.fontSizes.lg,
    },
    image: {
        width: "100%",
        display: "flex",
        justifyContent: "center",

        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            width: "unset",
            display: "block",
        },

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

export default React.forwardRef<HTMLDivElement>((_props, ref) => {
    const { t } = useTranslation(["home"]);
    const theme = useMantineTheme();
    const { classes } = useStyles();
    const education = useEducation();
    const getDateRange = useGetDateRange();

    return (
        <Container ref={ref} className={classes.container} fluid pb="xl">
            <Transitionner
                type="slantdesc"
                from={theme.colors.gray[2]}
                to={theme.colors.gray[0]}
            />
            <Container className={classes.content}>
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
            <Transitionner
                type="roundup"
                from={theme.colors.gray[0]}
                to={theme.colors.gray[2]}
            />
        </Container>
    );
});
