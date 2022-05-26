import { Avatar } from "@mantine/core";
import React from "react";

interface ExperienceLogoProps {
    name: string;
    logo: string;
}

const BULLET_SIZE = 25;

export default ({ name, logo }: ExperienceLogoProps) => {
    return (
        <Avatar
            radius="xl"
            size={BULLET_SIZE}
            src={logo}
            title={name}
            alt={name}
        />
    );
};
