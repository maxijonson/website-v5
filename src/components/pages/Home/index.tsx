import { useScrollIntoView } from "@mantine/hooks";
import React from "react";
import { useTranslation } from "react-i18next";
import Bio from "./Bio";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Landing from "./Landing";
import DesktopNav from "./DesktopNav";
import Projects from "./Projects";
import Skills from "./Skills";

export default () => {
    const { t } = useTranslation(["home"]);

    const bio = useScrollIntoView<HTMLDivElement>();
    const skills = useScrollIntoView<HTMLDivElement>();
    const projects = useScrollIntoView<HTMLDivElement>();
    const experience = useScrollIntoView<HTMLDivElement>();
    const education = useScrollIntoView<HTMLDivElement>();
    const contact = useScrollIntoView<HTMLDivElement>();

    const headers = [
        { name: t("home:bio.title"), element: bio },
        { name: t("home:skills.title"), element: skills },
        { name: t("home:projects.title"), element: projects },
        { name: t("home:experience.title"), element: experience },
        { name: t("home:education.title"), element: education },
        { name: t("home:contact.title"), element: contact },
    ];

    return (
        <>
            <DesktopNav headers={headers} />
            <Landing />
            <Bio ref={bio.targetRef} />
            <Skills ref={skills.targetRef} />
            <Projects ref={projects.targetRef} />
            <Experience ref={experience.targetRef} />
            <Education ref={education.targetRef} />
            <Contact ref={contact.targetRef} />
        </>
    );
};
