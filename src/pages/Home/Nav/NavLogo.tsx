import { Avatar, createStyles } from "@mantine/core";
import React from "react";

import Logo from "../../../assets/images/logo/color-transparent.svg";

const useStyles = createStyles(() => ({
    logo: {
        "& img": {
            objectFit: "contain",
        },
    },
}));

export default () => {
    const { classes } = useStyles();

    return (
        <Avatar
            className={classes.logo}
            src={Logo}
            radius={0}
            alt="Tristan Chin Logo"
        />
    );
};
