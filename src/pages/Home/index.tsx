import {
    useIntersection,
    useMergedRef,
    useScrollIntoView,
} from "@mantine/hooks";
import React from "react";
import { useTranslation } from "react-i18next";
import Bio from "./Bio";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Landing from "./Landing";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";

export default () => {
    const { t, i18n } = useTranslation(["home"]);

    const [landingIntersectionRef, landingObserver] =
        useIntersection<HTMLDivElement>({
            threshold: 0.6,
        });
    const [contactIntersectionRef, contactObserver] =
        useIntersection<HTMLDivElement>({
            threshold: 0.5,
        });

    const bio = useScrollIntoView<HTMLDivElement>({ offset: 50 });
    const skills = useScrollIntoView<HTMLDivElement>();
    const projects = useScrollIntoView<HTMLDivElement>();
    const experience = useScrollIntoView<HTMLDivElement>();
    const education = useScrollIntoView<HTMLDivElement>();
    const contact = useScrollIntoView<HTMLDivElement>();

    const mergedContactRef = useMergedRef(
        contact.targetRef,
        contactIntersectionRef
    );

    const headers = [
        { name: t("home:bio.title"), element: bio },
        { name: t("home:skills.title"), element: skills },
        { name: t("home:projects.title"), element: projects },
        { name: t("home:experience.title"), element: experience },
        { name: t("home:education.title"), element: education },
        { name: t("home:contact.title"), element: contact },
    ];

    const forceNavVisible =
        (landingObserver?.isIntersecting || contactObserver?.isIntersecting) ??
        false;

    React.useEffect(() => {
        document.title = t("home:title");
    }, [i18n.language]);

    return (
        <>
            <Nav headers={headers} forceVisible={forceNavVisible} />
            <Landing ref={landingIntersectionRef} />
            <Bio ref={bio.targetRef} />
            <Skills ref={skills.targetRef} />
            <Projects ref={projects.targetRef} />
            <Experience ref={experience.targetRef} />
            <Education ref={education.targetRef} />
            <Contact ref={mergedContactRef} />
        </>
    );
};
