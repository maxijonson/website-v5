import React from "react";
import {
    Container,
    useMantineTheme,
    useMantineColorScheme,
} from "@mantine/core";

export default () => {
    const theme = useMantineTheme();
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    return (
        <Container
            fluid
            sx={() => ({
                ...theme.fn.cover(),
                background: dark ? theme.black : theme.white,
            })}
        >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            fugit dicta voluptatibus quasi ad in. Ullam harum nam quam facilis
            accusamus tempora blanditiis cum atque quidem, ad perferendis.
            Veritatis, soluta? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. At ex quidem minus porro quis debitis dolores
            perferendis, voluptates ad maxime aspernatur officia consectetur quo
            cum a ducimus, commodi possimus. Qui! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Facere fugit dicta voluptatibus quasi
            ad in. Ullam harum nam quam facilis accusamus tempora blanditiis cum
            atque quidem, ad perferendis. Veritatis, soluta? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. At ex quidem minus porro quis
            debitis dolores perferendis, voluptates ad maxime aspernatur officia
            consectetur quo cum a ducimus, commodi possimus. Qui!
        </Container>
    );
};
