import { createStyles, Image } from "@mantine/core";
import React from "react";

interface SkillLogoProps {
    name: string;
    logo: string;
    disabled?: boolean;
}

const useStyles = createStyles(() => ({
    disabled: {
        filter: "grayscale(100%)",
        opacity: "0.25",
    },
}));

export default ({ name, logo, disabled = false }: SkillLogoProps) => {
    const { classes } = useStyles();
    return (
        <Image
            className={disabled ? classes.disabled : undefined}
            radius={0}
            width="16px"
            src={logo}
            alt={name}
        />
    );
};
