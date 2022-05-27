import { Container, createStyles, Text, Anchor } from "@mantine/core";
import { t } from "i18next";
import React from "react";
import { Trans } from "react-i18next";
import HomeTitle from "../HomeTitle";
import ContactSocials from "./ContactSocials";
import ContactVCard from "./ContactVCard";

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
                <ContactSocials />
                <ContactVCard />
            </Container>
        </Container>
    );
});
