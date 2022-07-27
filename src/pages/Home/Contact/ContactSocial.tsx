import { ActionIcon } from "@mantine/core";
import React from "react";
import { IconType } from "react-icons";

interface ContactSocialProps {
    icon: IconType;
    link: string;
    title: string;
    noBlank?: boolean;
}

export default ({
    icon: Icon,
    link,
    title,
    noBlank = false,
}: ContactSocialProps) => {
    return (
        <ActionIcon
            component="a"
            href={link}
            target={noBlank ? "_self" : "_blank"}
            color="dark"
            size="xl"
            p={5}
            title={title}
        >
            <Icon size="100%" />
        </ActionIcon>
    );
};
