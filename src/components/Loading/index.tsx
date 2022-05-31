import {
    createStyles,
    LoadingOverlay,
    LoadingOverlayProps,
} from "@mantine/core";
import { useScrollLock } from "@mantine/hooks";
import React from "react";
import AnimatedLogo, { AnimatedLogoProps } from "../AnimatedLogo";

interface LoadingProps extends AnimatedLogoProps, LoadingOverlayProps {
    fixed?: boolean;
    /** Locks scrolling while the loader is visible */
    locked?: boolean;
}

interface UseStylesParams {
    fixed: boolean;
}

const useStyles = createStyles((_theme, { fixed }: UseStylesParams) => ({
    loadingOverlay: {
        position: fixed ? "fixed" : undefined,
    },
}));

export default ({
    size,
    count,
    animationDuration,
    fixed = false,
    locked = false,
    ...loadingOverlayProps
}: LoadingProps) => {
    const { visible = true } = loadingOverlayProps;
    const [, setScrollLocked] = useScrollLock(locked && visible);

    const { classes } = useStyles({ fixed });

    React.useEffect(() => {
        setScrollLocked(locked && visible);
    }, [locked, visible]);

    return (
        <LoadingOverlay
            {...loadingOverlayProps}
            visible={visible}
            className={classes.loadingOverlay}
            loader={
                <AnimatedLogo
                    size={size}
                    count={count}
                    animationDuration={animationDuration}
                />
            }
        />
    );
};
