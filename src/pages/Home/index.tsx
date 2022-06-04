import { useIntersection } from "@mantine/hooks";
import React from "react";
import { useTranslation } from "react-i18next";
import Bio from "./Bio";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Landing from "./Landing";
import Nav from "./Nav";
import NavContextProvider from "./Nav/NavContextProvider";
import Projects from "./Projects";
import SectionCatcher from "./SectionCatcher";
import Skills from "./Skills";

export default () => {
    const { t } = useTranslation(["home"]);

    const [landingIntersectionRef, landingObserver] =
        useIntersection<HTMLDivElement>({
            threshold: 0.6,
        });
    const [contactIntersectionRef, contactObserver] =
        useIntersection<HTMLDivElement>({
            threshold: 0.5,
        });

    const forceNavVisible =
        (landingObserver?.isIntersecting || contactObserver?.isIntersecting) ??
        false;

    React.useEffect(() => {
        document.title = t("home:title");
    }, [t]);

    return (
        <NavContextProvider>
            <Nav forceVisible={forceNavVisible} />
            <SectionCatcher>
                <Landing ref={landingIntersectionRef} />
            </SectionCatcher>
            <SectionCatcher>
                <Bio />
            </SectionCatcher>
            <SectionCatcher>
                <Skills />
            </SectionCatcher>
            <SectionCatcher>
                <Projects />
            </SectionCatcher>
            <SectionCatcher>
                <Experience />
            </SectionCatcher>
            <SectionCatcher>
                <Education />
            </SectionCatcher>
            <SectionCatcher>
                <Contact ref={contactIntersectionRef} />
            </SectionCatcher>
            <SectionCatcher>
                <Footer />
            </SectionCatcher>
        </NavContextProvider>
    );
};
