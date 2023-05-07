import { Center, Image } from "@mantine/core";
import React from "react";

import ProfilePicture from "../../../assets/images/tristan/dci.jpg";

const W = 200;
const H = W;

export default () => {
    return (
        <Center>
            <Image
                width={W}
                height={H}
                radius={180}
                src={ProfilePicture}
                alt="Tristan Chin"
                imageProps={{
                    loading: "lazy",
                    width: `${W}px`,
                    height: `${H}px`,
                }}
            />
        </Center>
    );
};
