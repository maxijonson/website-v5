import {
    useIntersection,
    useMergedRef,
    useScrollIntoView,
} from "@mantine/hooks";
import React from "react";
import { useTranslation } from "react-i18next";

const Bio = React.lazy(() => import("./Bio"));
const Contact = React.lazy(() => import("./Contact"));
const Education = React.lazy(() => import("./Education"));
const Experience = React.lazy(() => import("./Experience"));
const Footer = React.lazy(() => import("./Footer"));
const Landing = React.lazy(() => import("./Landing"));
const Nav = React.lazy(() => import("./Nav"));
const Projects = React.lazy(() => import("./Projects"));
const Skills = React.lazy(() => import("./Skills"));

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
            <Footer />
        </>
    );
};
