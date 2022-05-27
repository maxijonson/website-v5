import { Anchor, Group, Modal, Text } from "@mantine/core";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import CopyrightAttributionTable from "./CopyrightAttributionTable";

export default () => {
    const { t } = useTranslation(["translation", "home"]);
    const [showAttributions, setShowAttributions] = React.useState(false);

    return (
        <>
            <Group>
                <Text>
                    *
                    <Trans
                        i18nKey="copyright.disclaimer"
                        t={t}
                        values={{
                            attribution: t("copyright.attributions"),
                        }}
                        components={[
                            <Anchor
                                role="button"
                                tabIndex={-1}
                                onClick={() => setShowAttributions(true)}
                            />,
                        ]}
                    />
                </Text>
            </Group>

            <Modal
                title={
                    <Text transform="capitalize" weight="bold">
                        {t("copyright.attributions")}
                    </Text>
                }
                centered
                opened={showAttributions}
                onClose={() => setShowAttributions(false)}
                size="xl"
            >
                <CopyrightAttributionTable />
            </Modal>
        </>
    );
};
