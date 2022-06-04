import { useScrollIntoView } from "@mantine/hooks";

export interface NavHeader {
    name: string;
    scrollIntoView: ReturnType<typeof useScrollIntoView>["scrollIntoView"];
    order?: number;
}
