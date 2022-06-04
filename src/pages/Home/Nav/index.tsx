import {
    Container,
    createStyles,
    Group,
    Header,
    useMantineTheme,
} from "@mantine/core";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import _ from "lodash";
import React from "react";
import DesktopMenu from "./DesktopMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import NavLogo from "./NavLogo";
import NavDivider from "./NavDivider";

interface NavProps {
    forceVisible: boolean;
}

interface UseStylesParams {
    showBackground: boolean;
    visible: boolean;
}

const useStyles = createStyles(
    (theme, { showBackground, visible }: UseStylesParams) => ({
        root: {
            border: "none",
            background: "transparent",
            transform: visible ? "translateY(0%)" : "translateY(-100%)",
            transition: "transform 0.5s",

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
            justifyContent: "space-between",
        },
    })
);

export default ({ forceVisible }: NavProps) => {
    const theme = useMantineTheme();
    const { width, height } = useViewportSize();
    const [{ y }] = useWindowScroll();

    const [menuOpen, setMenuOpen] = React.useState(false);
    const [lastY, setLastY] = React.useState(y);
    const [visible, setVisible] = React.useState(true);

    const { classes } = useStyles({
        showBackground: y >= height - 60,
        visible: forceVisible || menuOpen || visible,
    });

    const isDesktopSize = width >= theme.breakpoints.sm;

    React.useEffect(() => {
        const direction = y > lastY ? "down" : "up";
        if (y !== lastY) {
            setVisible(direction === "up");
        }
        setLastY(y);
    }, [y, lastY]);

    return (
        <Header className={classes.root} height={60} p={0} fixed>
            <Container className={classes.container}>
                <Group className={classes.containerGroup}>
                    <NavLogo />
                    <Group>
                        <DesktopMenu hidden={!isDesktopSize} />
                        <NavDivider hidden={!isDesktopSize} />
                        <LanguageSwitcher />
                        <NavDivider hidden={isDesktopSize} />
                        <MobileMenu
                            hidden={isDesktopSize}
                            onChange={setMenuOpen}
                        />
                    </Group>
                </Group>
            </Container>
        </Header>
    );
};
