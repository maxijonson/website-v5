import { createStyles } from "@mantine/core";
import React from "react";
import LogoInOut from "./LogoInOut";

export interface AnimatedLogoProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
    count?: "infinite" | number;
    animationDuration?: number;
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

const Copy = () => <LogoInOut />;

export default ({
    size = "sm",
    count = "infinite",
    animationDuration = 2500,
}: AnimatedLogoProps) => {
    const [iteration, setIteration] = React.useState(0);

    const { classes } = useStyles({
        size: typeof size === "string" ? SIZES[size] : size,
    });

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIteration((current) => {
                const next = current + 1;
                if (count !== "infinite" && next >= count) {
                    return current;
                }
                return next;
            });
        }, animationDuration);

        return () => {
            clearInterval(interval);
        };
    }, [count, animationDuration]);

    return (
        <div className={classes.logo}>
            {/* HACK: "animate" does not re-animate on call, so instead unmount and re-mount */}
            {iteration % 2 === 0 ? <LogoInOut /> : <Copy />}
        </div>
    );
};
