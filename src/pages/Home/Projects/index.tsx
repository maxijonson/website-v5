import {
    Anchor,
    Container,
    createStyles,
    Text,
    useMantineTheme,
} from "@mantine/core";
import React from "react";
import _ from "lodash";
import { Trans, useTranslation } from "react-i18next";
import Transitionner from "../../../components/Transitionner";
import HomeTitle from "../HomeTitle";
import useProjects from "./useProjects";
import ProjectsGrid from "./ProjectsGrid";

const useStyles = createStyles((theme) => ({
    container: {
        position: "relative",
        overflowX: "hidden",
        minHeight: "100vh",
        background: theme.colors.gray[0],
    },
    title: {
        marginTop: "calc(5vh + 12px)",
    },
    text: {
        textAlign: "center",
        fontSize: theme.fontSizes.lg,
        whiteSpace: "pre-line",
    },
}));

export default React.forwardRef<HTMLDivElement>((_props, ref) => {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const { t } = useTranslation(["home"]);
    const projects = useProjects();

    return (
        <Container ref={ref} className={classes.container} fluid pb="xl">
            <Transitionner
                type="slantdesc"
                from={theme.colors.gray[2]}
                to={theme.colors.gray[0]}
            />
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
                            <Anchor href="https://github.com/maxijonson">
                                Github
                            </Anchor>,
                        ]}
                    />
                </Text>
                <ProjectsGrid projects={projects} />
            </Container>
        </Container>
    );
});
