import { IconType } from "react-icons";

export interface ProjectLink {
    title: string;
    icon: IconType;
    url: string;
}

export interface Project {
    name: string;
    short: string;
    links: ProjectLink[];
    image?: string;
    cover?: boolean;
}
