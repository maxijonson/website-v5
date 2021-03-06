import React from "react";
import {
    createStyles,
    Title,
    Divider,
    TitleOrder,
    CSSObject,
    DefaultMantineColor,
} from "@mantine/core";

interface StyleProps {
    color?: CSSObject["color"];
    align?: CSSObject["textAlign"];
}

interface HomeTitleProps extends StyleProps {
    title: string;
    className?: string;
    order?: TitleOrder;
    dividerColor?: DefaultMantineColor;
}

const useStyles = createStyles((theme, { color, align }: StyleProps) => ({
    title: {
        fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
        color: color ?? theme.colors.dark[8],
        textTransform: "uppercase",
        textAlign: align ?? "center",
        fontWeight: 700,
        marginTop: "32px",
        marginBottom: "12px",
        lineHeight: 1.3,
    },
}));

export default ({
    title,
    className = "",
    order = 1,
    dividerColor,
    color,
    align,
}: HomeTitleProps) => {
    const { classes } = useStyles({ color, align });
    return (
        <div className={className}>
            <Title className={classes.title} order={order}>
                {title}
            </Title>
            <Divider size="xl" color={dividerColor} mb="md" />
        </div>
    );
};
