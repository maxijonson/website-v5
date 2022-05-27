import { ActionIcon, Button, Center, Group, Modal, Text } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import { useOs } from "@mantine/hooks";
import QRCode from "react-qr-code";
import { FaQrcode } from "react-icons/fa";

// @ts-ignore
import VCardUrl from "../../../assets/vcard.vcf?url";
// @ts-ignore
import VCardRaw from "../../../assets/vcard.vcf?raw";

const FILENAME = "tristanchin.vcf";

export default () => {
    const { t } = useTranslation(["home"]);
    const os = useOs();
    const [showQR, setShowQR] = React.useState(false);

    const handleClick = React.useCallback(() => {
        if (os === "ios" || os === "android") {
            window.location.href = VCardUrl;
            return;
        }

        const blob = new Blob([VCardRaw]);
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = FILENAME;

        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(link);
    }, []);

    return (
        <>
            <Center mt="md">
                <Group spacing="xs">
                    <Button
                        onClick={handleClick}
                        variant="outline"
                        color="dark"
                    >
                        {t("home:contact.vcard")}
                    </Button>
                    <ActionIcon
                        variant="outline"
                        color="dark"
                        size="lg"
                        p={4}
                        onClick={() => setShowQR(true)}
                        title="QR Code"
                    >
                        <FaQrcode size="100%" />
                    </ActionIcon>
                </Group>
            </Center>
            <Modal
                opened={showQR}
                centered
                title={<Text weight="bold">{t("home:contact.qr")}</Text>}
                onClose={() => setShowQR(false)}
                size="xs"
            >
                <Center>
                    <QRCode
                        data-autofocus
                        value={`${window.location.origin}/${VCardUrl}`}
                        size={256}
                    />
                </Center>
            </Modal>
        </>
    );
};
