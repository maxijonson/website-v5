import { ActionIcon, Button, Center, Group, Modal, Text } from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";
import { useOs } from "@mantine/hooks";
import QRCode from "react-qr-code";
import { FaQrcode } from "react-icons/fa";

import VCardUrlEn from "../../../assets/vcard-en.vcf?url";
import VCardUrlFr from "../../../assets/vcard-fr.vcf?url";

const FILENAME = "tristanchin.vcf";

export default () => {
    const { t, i18n } = useTranslation(["home"]);
    const os = useOs();
    const [showQR, setShowQR] = React.useState(false);

    const vcardUrl = i18n.language === "fr" ? VCardUrlFr : VCardUrlEn;

    const handleClick = React.useCallback(async () => {
        if (os === "ios" || os === "android") {
            window.location.href = vcardUrl;
            return;
        }

        const vcardRaw =
            i18n.language === "fr"
                ? import("../../../assets/vcard-fr.vcf?raw")
                : import("../../../assets/vcard-en.vcf?raw");
        const vcardData = (await vcardRaw).default;
        const blob = new Blob([vcardData]);
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = FILENAME;

        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(link);
    }, [vcardUrl, i18n.language, os]);

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
                        p={6}
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
                        value={`${window.location.origin}${vcardUrl}`}
                        size={256}
                    />
                </Center>
            </Modal>
        </>
    );
};
