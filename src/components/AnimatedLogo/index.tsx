import { createStyles } from "@mantine/core";
import React from "react";
import LogoInOut from "./LogoInOut";

interface AnimatedLogoProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
}

interface UseStylesParams {
    size: number;
}

const SIZES = {
    xs: 12,
    sm: 24,
    md: 32,
    lg: 48,
    xl: 64,
};

const useStyles = createStyles((_theme, { size }: UseStylesParams) => ({
    logo: {
        width: `${size}px`,
        height: `${size}px`,

        "& svg": {
            width: `${size}px`,
            height: `${size}px`,
        },
    },
}));

export default ({ size = "sm" }: AnimatedLogoProps) => {
    const { classes } = useStyles({
        size: typeof size === "string" ? SIZES[size] : size,
    });

    return (
        <div className={classes.logo}>
            <LogoInOut />
        </div>
    );
};
