import { AiFillGithub } from "react-icons/ai";
import { DiNpm } from "react-icons/di";
import { FaFaucet } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Project } from "./types";

import ImageVideoMerger from "../../../assets/images/projects/video-merger.png";
import ImageNuclui from "../../../assets/images/projects/nuclui.png";
import ImageIntellibot from "../../../assets/images/projects/intellibot.png";
import ImagePunchBot from "../../../assets/images/projects/punchbot.png";
import ImageCuisto from "../../../assets/images/projects/cuisto.png";
import ImageReact from "../../../assets/images/projects/react.jpg";

export default (): Project[] => {
    const { t } = useTranslation(["home"]);

    return [
        {
            name: "Phisherman",
            short: t("home:projects.short.phisherman"),
            links: [
                {
                    title: "Github",
                    icon: AiFillGithub,
                    url: "https://github.com/maxijonson/phisherman",
                },
                {
                    title: "NPM - Phisherman library",
                    icon: DiNpm,
                    url: "https://www.npmjs.com/package/@maxijonson/phisherman",
                },
                {
                    title: "NPM - Phisherman CLI",
                    icon: DiNpm,
                    url: "https://www.npmjs.com/package/@maxijonson/phisherman-cli",
                },
            ],
        },
        {
            name: "Video Merger",
            short: t("home:projects.short.video-merger"),
            image: ImageVideoMerger,
            links: [
                {
                    title: "Github",
                    icon: AiFillGithub,
                    url: "https://github.com/maxijonson/video-merger",
                },
            ],
        },
        {
            name: "Nuclui",
            short: t("home:projects.short.nuclui"),
            image: ImageNuclui,
            links: [
                {
                    title: "Github",
                    icon: AiFillGithub,
                    url: "https://github.com/maxijonson/nuclui",
                },
                {
                    title: "NPM",
                    icon: DiNpm,
                    url: "https://www.npmjs.com/package/nuclui",
                },
            ],
        },
        {
            name: "GeNFT",
            short: t("home:projects.short.genft"),
            links: [
                {
                    title: "Github",
                    icon: AiFillGithub,
                    url: "https://github.com/maxijonson/genft",
                },
                {
                    title: "NPM",
                    icon: DiNpm,
                    url: "https://www.npmjs.com/package/genft",
                },
            ],
        },
        {
            name: "Intellibot",
            short: t("home:projects.short.intellibot"),
            image: ImageIntellibot,
            links: [
                {
                    title: "Github",
                    icon: AiFillGithub,
                    url: "https://github.com/maxijonson/Intellibot",
                },
            ],
        },
        {
            name: "Punch Bot",
            short: t("home:projects.short.punchbot"),
            image: ImagePunchBot,
            links: [
                {
                    title: "Github",
                    icon: AiFillGithub,
                    url: "https://github.com/maxijonson/PunchBot",
                },
            ],
        },
        {
            name: "Code Lock",
            short: t("home:projects.short.codelock"),
            links: [
                {
                    title: "Github",
                    icon: AiFillGithub,
                    url: "https://github.com/maxijonson/code-lock",
                },
                {
                    title: "Spigot",
                    icon: FaFaucet,
                    url: "https://www.spigotmc.org/resources/code-lock.91058/",
                },
            ],
        },
        {
            name: "Tinder Bullseye",
            short: t("home:projects.short.tinderbullseye"),
            links: [
                {
                    title: "Github",
                    icon: AiFillGithub,
                    url: "https://github.com/maxijonson/tinder-bullseye",
                },
            ],
        },
        {
            name: "React (Wallpaper Engine)",
            short: t("home:projects.short.react"),
            image: ImageReact,
            cover: true,
            links: [
                {
                    title: "Github",
                    icon: AiFillGithub,
                    url: "https://github.com/maxijonson/React---Wallpaper-Engine",
                },
            ],
        },
        {
            name: "Cuisto",
            short: t("home:projects.short.cuisto"),
            image: ImageCuisto,
            links: [
                {
                    title: "Github",
                    icon: AiFillGithub,
                    url: "https://github.com/maxijonson/Cuisto-public",
                },
            ],
        },
    ];
};
