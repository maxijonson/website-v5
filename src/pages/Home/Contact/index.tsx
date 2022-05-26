import {
    Container,
    Group,
    createStyles,
    Text,
    ActionIcon,
    Anchor,
} from "@mantine/core";
import { t } from "i18next";
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import { Trans } from "react-i18next";
import { IconType } from "react-icons";
import HomeTitle from "../HomeTitle";

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
}));

const Social = ({
    icon: Icon,
    link,
    title,
    noBlank = false,
}: {
    icon: IconType;
    link: string;
    title: string;
    noBlank?: boolean;
}) => {
    return (
        <ActionIcon
            component="a"
            href={link}
            target={noBlank ? "_self" : "_blank"}
            size="xl"
            p={5}
            title={title}
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
                            <Anchor href="mailto:tristan.chin@chintristan.io">
                                tristan.chin@chintristan.io
                            </Anchor>,
                        ]}
                    />
                </Text>
                <Group position="center" mt="md">
                    <Social
                        icon={FaLinkedinIn}
                        link="https://www.linkedin.com/in/tristan-chin/"
                        title="Linked In"
                    />
                    <Social
                        icon={AiFillGithub}
                        link="https://github.com/maxijonson"
                        title="Github"
                    />
                    <Social
                        icon={AiOutlineMail}
                        link="mailto:tristan.chin@chintristan.io"
                        title="Email"
                        noBlank
                    />
                    <Social
                        icon={AiOutlineTwitter}
                        link="https://twitter.com/MaxiJonson"
                        title="Twitter"
                    />
                </Group>
            </Container>
        </Container>
    );
});
