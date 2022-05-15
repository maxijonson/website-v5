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
        fontFamily: "Staatliches",
        color: color ?? theme.colors.dark[8],
        textTransform: "uppercase",
        textAlign: align ?? "center",
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
        <div>
            <Title className={`${classes.title} ${className}`} order={order}>
                {title}
            </Title>
            <Divider size="xl" color={dividerColor} mb="md" />
        </div>
    );
};
