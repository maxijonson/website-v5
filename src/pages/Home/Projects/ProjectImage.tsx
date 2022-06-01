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

const W = 300;
const H = 160;

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
                    width={W}
                    height={H}
                    fit={cover ? "cover" : "contain"}
                    src={image}
                    alt={name}
                    imageProps={{
                        loading: "lazy",
                        width: `${W}px`,
                        height: `${H}px`,
                    }}
                />
            ) : (
                <ProjectNameSVG name={name} />
            )}
        </Card.Section>
    );
};
