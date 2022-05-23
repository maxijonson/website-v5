import {
    Anchor,
    Burger,
    Container,
    createStyles,
    Divider,
    Group,
    GroupedTransition,
    Header,
    MantineSize,
    Navbar,
    Overlay,
    Stack,
    useMantineTheme,
} from "@mantine/core";
import {
    useBooleanToggle,
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

interface HeaderAnchorProps {
    children: React.ReactNode;
    onClick: () => void;
    size?: MantineSize | undefined;
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

        divider: {
            zIndex: 100,
            margin: "auto 0",
            height: "32px",
        },
        burger: {
            zIndex: 220,
        },
        overlay: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
        },
        navbar: {
            zIndex: 210,
            position: "absolute",
            top: 0,
            right: 0,
            width: "max(30vw, 300px)",
            height: "100vh",
            boxShadow: `0 0 8px ${theme.colors.dark[8]}`,
            background: theme.fn.linearGradient(
                90,
                theme.colors.gray[0],
                theme.colors.gray[1]
            ),
        },
        navbarContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
        },
    })
);

const useHeaderStyles = createStyles((theme) => ({
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
            height: "2px",
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
}));

const HeaderAnchor = ({
    onClick,
    children,
    size = "sm",
}: HeaderAnchorProps) => {
    const { classes } = useHeaderStyles();
    return (
        <Anchor
            className={classes.header}
            size={size}
            variant="text"
            transform="uppercase"
            weight="bold"
            onClick={onClick}
        >
            {children}
        </Anchor>
    );
};

export default ({ headers }: NavProps) => {
    const theme = useMantineTheme();
    const { height, width } = useViewportSize();
    const [{ y }] = useWindowScroll();
    const [menuOpen, toggleMenu] = useBooleanToggle(false);
    const { classes } = useStyles({ showBackground: y >= height - 60 });
    const { i18n } = useTranslation();

    return (
        <Header className={classes.root} height={60} p={0} fixed>
            <Container className={classes.container}>
                <Group className={classes.containerGroup} position="right">
                    <Group hidden={width < theme.breakpoints.sm}>
                        {_.map(headers, (header) => (
                            <HeaderAnchor
                                key={header.name}
                                onClick={() => header.element.scrollIntoView()}
                            >
                                {header.name}
                            </HeaderAnchor>
                        ))}
                        <Divider
                            className={classes.divider}
                            orientation="vertical"
                            color="dark"
                        />
                    </Group>
                    <Group>
                        <HeaderAnchor
                            onClick={() =>
                                i18n.changeLanguage(
                                    i18n.language === "en" ? "fr" : "en"
                                )
                            }
                        >
                            {i18n.language === "en" ? "FR" : "EN"}
                        </HeaderAnchor>
                    </Group>
                    <Group hidden={width >= theme.breakpoints.sm}>
                        <Divider
                            className={classes.divider}
                            orientation="vertical"
                            color="dark"
                        />
                        <Burger
                            className={classes.burger}
                            opened={menuOpen}
                            onClick={() => toggleMenu()}
                        />

                        <GroupedTransition
                            mounted={menuOpen}
                            transitions={{
                                overlay: { duration: 250, transition: "fade" },
                                navbar: {
                                    duration: 250,
                                    transition: "slide-right",
                                },
                            }}
                        >
                            {(styles) => (
                                <>
                                    <Overlay
                                        className={classes.overlay}
                                        style={styles.overlay}
                                        color="gray"
                                        blur={2}
                                        onClick={() => toggleMenu()}
                                    />
                                    <Navbar
                                        style={styles.navbar}
                                        className={classes.navbar}
                                    >
                                        <Container
                                            className={classes.navbarContainer}
                                            fluid
                                            p="xs"
                                        >
                                            <Stack
                                                align="center"
                                                justify="center"
                                            >
                                                {_.map(headers, (header) => (
                                                    <HeaderAnchor
                                                        key={header.name}
                                                        size="xl"
                                                        onClick={() => {
                                                            header.element.scrollIntoView();
                                                            toggleMenu();
                                                        }}
                                                    >
                                                        {header.name}
                                                    </HeaderAnchor>
                                                ))}
                                            </Stack>
                                        </Container>
                                    </Navbar>
                                </>
                            )}
                        </GroupedTransition>
                    </Group>
                </Group>
            </Container>
        </Header>
    );
};