import { Center, Image } from "@mantine/core";
import React from "react";

import ProfilePicture from "../../../assets/images/tristan/mtl.jpg";

export default () => {
    return (
        <Center>
            <Image
                width={200}
                radius={180}
                src={ProfilePicture}
                alt="Tristan Chin"
                imageProps={{ loading: "lazy" }}
            />
        </Center>
    );
};
