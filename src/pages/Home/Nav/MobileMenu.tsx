import { Burger, createStyles, Group, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import React from "react";
import MenuDrawer from "./MenuDrawer";

interface MobileMenuProps {
    onChange?: (opened: boolean) => void;
    hidden?: boolean;
}

const useStyles = createStyles(() => ({
    burger: {
        zIndex: 220,
    },
}));

export default ({ onChange, hidden = false }: MobileMenuProps) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const theme = useMantineTheme();
    const { width } = useViewportSize();
    const { classes } = useStyles();

    const handleChange = React.useCallback(
        (value: boolean) => {
            setMenuOpen(value);
            onChange?.(value);
        },
        [onChange]
    );

    const handleClick = React.useCallback(() => {
        handleChange(!menuOpen);
    }, [menuOpen, handleChange]);

    if (hidden) {
        return null;
    }

    return (
        <>
            <Group hidden={width >= theme.breakpoints.sm}>
                <Burger
                    className={classes.burger}
                    opened={menuOpen}
                    onClick={handleClick}
                    title="Menu"
                    name="menu"
                />
            </Group>
            <MenuDrawer onChange={handleChange} opened={menuOpen} />
        </>
    );
};
