import { Card, createStyles, Image } from "@mantine/core";
import React from "react";
import ProjectNameSVG from "./ProjectNameSVG";

interface ProjectImageProps {
    name: string;
    image?: string;
    cover?: boolean;
}

const useStyles = createStyles((theme) => ({
    projectImageWrapper: {
        margin: `-20px -20px 20px`,
        background: theme.fn.linearGradient(
            35,
            theme.colors.gray[0],
            theme.colors.gray[1]
        ),
    },
}));

export default ({ name, image, cover = false }: ProjectImageProps) => {
    const { classes } = useStyles();

    return (
        <Card.Section
            className={classes.projectImageWrapper}
            mb="lg"
            style={{ height: "160px" }}
        >
            {image ? (
                <Image
                    height={160}
                    fit={cover ? "cover" : "contain"}
                    src={image}
                    alt={name}
                />
            ) : (
                <ProjectNameSVG name={name} />
            )}
        </Card.Section>
    );
};