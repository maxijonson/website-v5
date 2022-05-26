import {
    Avatar,
    Container,
    createStyles,
    List,
    ListItem,
    Text,
    ThemeIcon,
    Timeline,
    TimelineItem,
    useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import { BiTask } from "react-icons/bi";
import HomeTitle from "../HomeTitle";
import Transitionner from "../../../components/Transitionner";

import LogoDesjardins from "../../../assets/images/experience/desjardins.jpg";
import LogoIpnos from "../../../assets/images/experience/ipnos.jpg";
import LogoComact from "../../../assets/images/experience/comact.jpg";

const BULLET_SIZE = 25;

const useStyles = createStyles((theme) => ({
    container: {
        position: "relative",
        overflowX: "hidden",
        minHeight: "100vh",
        background: theme.colors.gray[2],
    },
    title: {
        marginTop: "calc(5vh + 12px)",
    },
    text: {
        textAlign: "center",
        fontSize: theme.fontSizes.lg,
        whiteSpace: "pre-line",
    },
    timeline: {
        "& .mantine-Timeline-itemTitle": {
            fontWeight: "bold",
            fontSize: theme.fontSizes.lg,
        },
    },
    jobPosition: {
        fontStyle: "italic",
    },
}));

const useJobs = () => {
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

const useMonths = () => {
    const { t } = useTranslation();

    const months = React.useMemo(() => {
        return _.range(0, 11).map((i) => t(`months.${i}`));
    }, []);

    return months;
};

const getDate = (date: Date, months: string[]) => {
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

export default React.forwardRef<HTMLDivElement>((_props, ref) => {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const { t } = useTranslation(["translation", "home"]);
    const jobs = useJobs();
    const months = useMonths();

    return (
        <Container ref={ref} className={classes.container} fluid pb="xl">
            <Transitionner
                type="slantasc"
                from={theme.colors.gray[0]}
                to={theme.colors.gray[2]}
            />
            <Container>
                <HomeTitle
                    className={classes.title}
                    title={t("home:experience.title")}
                />
                <Text className={classes.text}>
                    {t("home:experience.text")}
                </Text>
                <Container size="sm">
                    <Timeline
                        className={classes.timeline}
                        mt="xl"
                        bulletSize={BULLET_SIZE}
                    >
                        {jobs.map((job) => (
                            <TimelineItem
                                key={`${job.company}-${job.from.toISOString()}`}
                                title={job.company}
                                bullet={
                                    <Avatar
                                        radius="xl"
                                        size={BULLET_SIZE}
                                        src={job.logo}
                                        title={job.company}
                                        alt={job.company}
                                    />
                                }
                            >
                                <Text size="sm">
                                    {getDate(job.from, months)}
                                    {" - "}
                                    {job.to
                                        ? getDate(job.to, months)
                                        : t("time.present")}
                                </Text>
                                <Text className={classes.jobPosition} size="md">
                                    {job.position}
                                </Text>
                                {job.companyDescription && (
                                    <Text>{job.companyDescription}</Text>
                                )}
                                {job.jobPoints && (
                                    <List
                                        mt="md"
                                        pl={0}
                                        icon={
                                            <ThemeIcon color="gray" radius="xl">
                                                <BiTask />
                                            </ThemeIcon>
                                        }
                                        spacing="md"
                                    >
                                        {_.map(job.jobPoints, (point) => (
                                            <ListItem key={point}>
                                                {point}
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Container>
            </Container>
        </Container>
    );
});
