import { useScrollIntoView } from "@mantine/hooks";

export interface NavHeader {
    name: string;
    element: ReturnType<typeof useScrollIntoView>;
}
