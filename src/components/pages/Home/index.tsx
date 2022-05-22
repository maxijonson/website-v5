import React from "react";
import Bio from "./Bio";
import Education from "./Education";
import Experience from "./Experience";
import Landing from "./Landing";
import Projects from "./Projects";
import Skills from "./Skills";

export default () => {
    return (
        <>
            <Landing />
            <Bio />
            <Skills />
            <Projects />
            <Experience />
            <Education />
        </>
    );
};
