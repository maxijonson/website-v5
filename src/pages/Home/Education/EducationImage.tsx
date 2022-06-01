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

const W = 128;
const H = W / 2;

export default ({ image, name }: EducationImageProps) => {
    const { classes } = useStyles();

    return (
        <Image
            className={classes.image}
            radius={0}
            width={W}
            height={H}
            src={image}
            alt={name}
            imageProps={{ loading: "lazy", width: `${W}px`, height: `${H}px` }}
        />
    );
};
