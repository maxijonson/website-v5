import React from "react";

interface ProjectNameSVGProps {
    name: string;
}

export default ({ name }: ProjectNameSVGProps) => {
    return (
        <svg
            height="160px"
            style={{
                background: "transparent",
                display: "block",
                margin: "0 auto",
                padding: "0",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
            }}
        >
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                alignmentBaseline="central"
                style={{
                    fontFamily: "Staatliches",
                    fontSize: "2rem",
                    userSelect: "none",
                }}
            >
                {name}
            </text>
        </svg>
    );
};
