import {
    Container,
    createStyles,
    GroupedTransition,
    Navbar,
    Overlay,
    Stack,
} from "@mantine/core";
import _ from "lodash";
import React from "react";
import HeaderAnchor from "./HeaderAnchor";
import NavContext from "./NavContext";

interface MenuDrawerProps {
    opened: boolean;
    onChange?: (value: boolean) => void;
}

const useStyles = createStyles((theme) => ({
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
}));

export default ({ opened, onChange }: MenuDrawerProps) => {
    const { classes } = useStyles();
    const { headers } = React.useContext(NavContext);

    return (
        <GroupedTransition
            mounted={opened}
            transitions={{
                overlay: {
                    duration: 250,
                    transition: "fade",
                },
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
                        onClick={() => onChange?.(false)}
                    />
                    <Navbar style={styles.navbar} className={classes.navbar}>
                        <Container
                            className={classes.navbarContainer}
                            fluid
                            p="xs"
                        >
                            <Stack align="center" justify="center">
                                {_.map(headers, (header) => (
                                    <HeaderAnchor
                                        key={header.name}
                                        size="xl"
                                        onClick={() => {
                                            header.scrollIntoView();
                                            onChange?.(false);
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
    );
};
