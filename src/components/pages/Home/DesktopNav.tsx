import {
    Anchor,
    Container,
    createStyles,
    Divider,
    Group,
    Header,
    useMantineTheme,
} from "@mantine/core";
import {
    useScrollIntoView,
    useViewportSize,
    useWindowScroll,
} from "@mantine/hooks";
import _ from "lodash";
import React from "react";
import { useTranslation } from "react-i18next";

interface NavProps {
    headers: {
        name: string;
        element: ReturnType<typeof useScrollIntoView>;
    }[];
}

interface UseStylesParams {
    showBackground: boolean;
}

const useStyles = createStyles(
    (theme, { showBackground }: UseStylesParams) => ({
        root: {
            border: "none",
            background: "transparent",

            "&::before": {
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                transition: "transform 0.25s ease-in-out",
                boxShadow: `${theme.shadows.md}`,
                transform: showBackground
                    ? "translate3d(0, 0, 0)"
                    : "translate3d(0, -100%, 0)",
                background: theme.fn.linearGradient(
                    90,
                    theme.colors.gray[0],
                    theme.colors.gray[1]
                ),
            },
        },
        container: {
            height: "100%",
        },
        containerGroup: {
            height: "100%",
        },
        header: {
            color: `${theme.colors.dark[5]} !important`,
            display: "block",
            position: "relative",
            overflow: "hidden",
            opacity: 1,

            "&::after": {
                content: "''",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "0.1em",
                background: `${theme.colors.dark[5]}`,
                transform: "translate3d(calc(-100% - 1px), 0, 0)",
                transition: "transform 0.2s ease-in-out",
            },

            "&:hover": {
                textDecoration: "none !important",
                "&::after": {
                    transform: "translate3d(0, 0, 0)",
                },
            },
        },
        divider: {
            zIndex: 100,
            margin: "auto 0",
            height: "32px",
        },
    })
);

export default ({ headers }: NavProps) => {
    const theme = useMantineTheme();
    const { height, width } = useViewportSize();
    const [{ y }] = useWindowScroll();
    const { classes } = useStyles({ showBackground: y >= height - 60 });
    const { i18n } = useTranslation();

    console.info(i18n.language);

    return (
        <Header className={classes.root} height={60} p={0} fixed>
            <Container className={classes.container}>
                <Group className={classes.containerGroup} position="right">
                    <Group hidden={width < theme.breakpoints.sm}>
                        {_.map(headers, (header) => (
                            <Anchor
                                key={header.name}
                                className={classes.header}
                                size="sm"
                                variant="text"
                                transform="uppercase"
                                weight="bold"
                                onClick={() => header.element.scrollIntoView()}
                            >
                                {header.name}
                            </Anchor>
                        ))}
                        <Divider
                            className={classes.divider}
                            orientation="vertical"
                            color="dark"
                        />
                    </Group>
                    <Group>
                        <Anchor
                            className={classes.header}
                            size="sm"
                            variant="text"
                            transform="uppercase"
                            weight="bold"
                            onClick={() =>
                                i18n.changeLanguage(
                                    i18n.language === "en" ? "fr" : "en"
                                )
                            }
                        >
                            {i18n.language === "en" ? "FR" : "EN"}
                        </Anchor>
                    </Group>
                </Group>
            </Container>
        </Header>
    );
};
