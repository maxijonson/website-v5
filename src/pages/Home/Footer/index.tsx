import { Container, createStyles, Stack } from "@mantine/core";
import React from "react";
import Copyright from "./Copyright";

const useStyles = createStyles((theme) => ({
    container: {
        background: theme.colors.gray[2],
    },
}));

export default () => {
    const { classes } = useStyles();

    return (
        <Container className={classes.container} py="md" fluid>
            <Stack>
                <Copyright />
            </Stack>
        </Container>
    );
};
