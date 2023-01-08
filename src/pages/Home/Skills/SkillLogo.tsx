import { createStyles, Image } from "@mantine/core";
import React from "react";

interface SkillLogoProps {
    name: string;
    logo: string;
    disabled?: boolean;
}

const useStyles = createStyles(() => ({
    disabled: {
        opacity: "0.25",
    },
}));

const W = 16;
const H = W;

export default ({ name, logo, disabled = false }: SkillLogoProps) => {
    const { classes } = useStyles();
    return (
        <Image
            className={disabled ? classes.disabled : undefined}
            radius={0}
            width={W}
            height={H}
            fit="contain"
            src={logo}
            alt={name}
            imageProps={{ loading: "lazy", width: `${W}px`, height: `${H}px` }}
        />
    );
};
