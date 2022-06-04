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
import Footer from "./Footer";
import Landing from "./Landing";
import Nav from "./Nav";
import Projects from "./Projects";
import SectionCatcher from "./SectionCatcher";
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

    const bio = useScrollIntoView<HTMLDivElement>();
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
    }, [i18n.language, t]);

    return (
        <>
            <Nav headers={headers} forceVisible={forceNavVisible} />
            <SectionCatcher>
                <Landing ref={landingIntersectionRef} />
            </SectionCatcher>
            <SectionCatcher>
                <Bio ref={bio.targetRef} />
            </SectionCatcher>
            <SectionCatcher>
                <Skills ref={skills.targetRef} />
            </SectionCatcher>
            <SectionCatcher>
                <Projects ref={projects.targetRef} />
            </SectionCatcher>
            <SectionCatcher>
                <Experience ref={experience.targetRef} />
            </SectionCatcher>
            <SectionCatcher>
                <Education ref={education.targetRef} />
            </SectionCatcher>
            <SectionCatcher>
                <Contact ref={mergedContactRef} />
            </SectionCatcher>
            <SectionCatcher>
                <Footer />
            </SectionCatcher>
        </>
    );
};
