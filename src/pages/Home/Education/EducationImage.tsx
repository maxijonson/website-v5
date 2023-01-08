import { Image } from "@mantine/core";
import React from "react";

interface EducationImageProps {
    image: string;
    name: string;
}

const W = 128;
const H = W / 2;

export default ({ image, name }: EducationImageProps) => {
    return (
        <Image
            radius={0}
            width={W}
            height={H}
            src={image}
            alt={name}
            imageProps={{ loading: "lazy", width: `${W}px`, height: `${H}px` }}
        />
    );
};
