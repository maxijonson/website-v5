import { Group } from "@mantine/core";
import React from "react";
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ContactSocial from "./ContactSocial";

export default () => {
    return (
        <Group position="center" mt="md">
            <ContactSocial
                icon={FaLinkedinIn}
                link="https://www.linkedin.com/in/tristan-chin/"
                title="Linked In"
            />
            <ContactSocial
                icon={AiFillGithub}
                link="https://github.com/maxijonson"
                title="Github"
            />
            <ContactSocial
                icon={AiOutlineMail}
                link="mailto:tristan.chin@chintristan.io"
                title="Email"
                noBlank
            />
            <ContactSocial
                icon={AiOutlineTwitter}
                link="https://twitter.com/MaxiJonson"
                title="Twitter"
            />
        </Group>
    );
};
