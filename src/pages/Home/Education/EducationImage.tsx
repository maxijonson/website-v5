import { createStyles, Image } from "@mantine/core";
import React from "react";

interface EducationImageProps {
    image: string;
    name: string;
}

const useStyles = createStyles((theme) => ({
    image: {
        width: "100%",
        display: "flex",
        justifyContent: "center",

        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            width: "unset",
            display: "block",
        },

        "& img": {
            marginBottom: 0,
        },
    },
}));

export default ({ image, name }: EducationImageProps) => {
    const { classes } = useStyles();

    return (
        <Image
            className={classes.image}
            radius={0}
            width="128px"
            src={image}
            alt={name}
            imageProps={{ loading: "lazy" }}
        />
    );
};
