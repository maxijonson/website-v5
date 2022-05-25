import {
    Center,
    Container,
    createStyles,
    Image,
    Stack,
    Text,
} from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import HomeTitle from "./HomeTitle";

import ProfilePicture from "../../../assets/images/tristan/mtl.jpg";

const useStyles = createStyles((theme) => ({
    container: {
        position: "relative",
        overflowX: "hidden",
        background: theme.colors.gray[0],
    },
    text: {
        textAlign: "center",
        fontSize: theme.fontSizes.lg,
        whiteSpace: "pre-line",
    },
}));

export default React.forwardRef<HTMLDivElement>((_props, ref) => {
    const { t } = useTranslation(["home"]);
    const { classes } = useStyles();

    return (
        <Container ref={ref} className={classes.container} fluid px={0}>
            <Container>
                <HomeTitle title={t("home:bio.title")} />
                <Stack spacing="xl" mx="xl" mt="xl">
                    <Text className={classes.text}>{t("home:bio.text")}</Text>
                    <Center>
                        <Image
                            width={200}
                            radius={180}
                            src={ProfilePicture}
                            alt="Tristan Chin"
                        />
                    </Center>
                </Stack>
            </Container>
        </Container>
    );
});
