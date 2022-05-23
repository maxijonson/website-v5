import {
    Container,
    Group,
    createStyles,
    Text,
    ActionIcon,
} from "@mantine/core";
import { t } from "i18next";
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import { Trans } from "react-i18next";
import { IconType } from "react-icons";
import HomeTitle from "./HomeTitle";

const useStyles = createStyles((theme) => ({
    container: {
        position: "relative",
        overflowX: "hidden",
        background: theme.colors.gray[2],
        paddingBottom: "64px",
    },
    text: {
        textAlign: "center",
        fontSize: theme.fontSizes.lg,
    },
    actionIcon: {
        color: `${theme.colors.dark[5]} !important`,
    },
}));

const Social = ({
    icon: Icon,
    link,
    noBlank = false,
}: {
    icon: IconType;
    link: string;
    noBlank?: boolean;
}) => {
    const { classes } = useStyles();

    return (
        <ActionIcon
            component="a"
            href={link}
            target={noBlank ? "_self" : "_blank"}
            className={classes.actionIcon}
            size="xl"
            p={5}
        >
            <Icon size="100%" />
        </ActionIcon>
    );
};

export default React.forwardRef<HTMLDivElement>((_props, ref) => {
    const { classes } = useStyles();
    return (
        <Container ref={ref} className={classes.container} fluid>
            <Container>
                <HomeTitle title={t("home:contact.title")} />
                <Text className={classes.text}>
                    <Trans
                        i18nKey="home:contact.text"
                        t={t}
                        values={{ email: "tristan.chin@chintristan.io" }}
                        components={[
                            <a href="mailto:tristan.chin@chintristan.io">
                                tristan.chin@chintristan.io
                            </a>,
                        ]}
                    />
                </Text>
                <Group position="center" mt="md">
                    <Social
                        icon={FaLinkedinIn}
                        link="https://www.linkedin.com/in/tristan-chin/"
                    />
                    <Social
                        icon={AiFillGithub}
                        link="https://github.com/maxijonson"
                    />
                    <Social
                        icon={AiOutlineMail}
                        link="mailto:tristan.chin@chintristan.io"
                        noBlank
                    />
                    <Social
                        icon={AiOutlineTwitter}
                        link="https://twitter.com/MaxiJonson"
                    />
                </Group>
            </Container>
        </Container>
    );
});
