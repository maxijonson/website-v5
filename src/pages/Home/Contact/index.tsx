import { Container, createStyles, Text, Anchor } from "@mantine/core";
import { useMergedRef, useViewportSize } from "@mantine/hooks";
import { t } from "i18next";
import React from "react";
import { Trans } from "react-i18next";
import LazyLoad from "../../../components/LazyLoad";
import HomeTitle from "../HomeTitle";
import useNavRegister from "../Nav/useNavRegister";
import ContactSocials from "./ContactSocials";

const ContactVCard = React.lazy(() => import("./ContactVCard"));

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
    const { height: vh } = useViewportSize();
    const scrollRef = useNavRegister(t("home:contact.title"));
    const mergedRef = useMergedRef(ref, scrollRef);

    return (
        <Container ref={mergedRef} className={classes.container} fluid>
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
                <LazyLoad margin={0.5 * vh}>
                    <ContactVCard />
                </LazyLoad>
            </Container>
        </Container>
    );
});
