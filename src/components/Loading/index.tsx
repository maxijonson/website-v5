import {
    createStyles,
    LoadingOverlay,
    LoadingOverlayProps,
    Stack,
    Text,
} from "@mantine/core";
import { useScrollLock } from "@mantine/hooks";
import React from "react";
import AnimatedLogo, { AnimatedLogoProps } from "../AnimatedLogo";

interface LoadingProps extends AnimatedLogoProps, LoadingOverlayProps {
    fixed?: boolean;
    /** Locks scrolling while the loader is visible */
    locked?: boolean;
    message?: string;
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
    message,
    fixed = false,
    locked = false,
    ...loadingOverlayProps
}: LoadingProps) => {
    const { visible = true } = loadingOverlayProps;
    const [, setScrollLocked] = useScrollLock(locked && visible);

    const { classes } = useStyles({ fixed });

    React.useEffect(() => {
        setScrollLocked(locked && visible);
    }, [locked, setScrollLocked, visible]);

    return (
        <LoadingOverlay
            {...loadingOverlayProps}
            visible={visible}
            className={classes.loadingOverlay}
            zIndex={1002}
            loader={
                <Stack align="center">
                    <AnimatedLogo
                        size={size}
                        count={count}
                        animationDuration={animationDuration}
                    />
                    {message && <Text weight="bold">{message}</Text>}
                </Stack>
            }
        />
    );
};
