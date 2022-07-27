import React, { CSSProperties } from "react";
import { Global } from "@mantine/core";
import _ from "lodash";

// Lato
import LatoThin from "../../assets/fonts/Lato/Lato-Thin.ttf";
import LatoThinItalic from "../../assets/fonts/Lato/Lato-ThinItalic.ttf";
import LatoLight from "../../assets/fonts/Lato/Lato-Light.ttf";
import LatoLightItalic from "../../assets/fonts/Lato/Lato-LightItalic.ttf";
import LatoRegular from "../../assets/fonts/Lato/Lato-Regular.ttf";
import LatoItalic from "../../assets/fonts/Lato/Lato-Italic.ttf";
import LatoBold from "../../assets/fonts/Lato/Lato-Bold.ttf";
import LatoBoldItalic from "../../assets/fonts/Lato/Lato-BoldItalic.ttf";
import LatoBlack from "../../assets/fonts/Lato/Lato-Black.ttf";
import LatoBlackItalic from "../../assets/fonts/Lato/Lato-BlackItalic.ttf";

// Staatliches
import StaatlichesRegular from "../../assets/fonts/Staatliches/Staatliches-Regular.ttf";

type Font = [
    font: CSSProperties["fontFamily"],
    weight: CSSProperties["fontWeight"],
    style: CSSProperties["fontStyle"]
];

export default () => {
    const lato = React.useMemo<Font[]>(() => {
        return [
            [LatoThin, 100, "normal"],
            [LatoThinItalic, 100, "italic"],
            [LatoLight, 300, "normal"],
            [LatoLightItalic, 300, "italic"],
            [LatoRegular, "normal", "normal"],
            [LatoItalic, "normal", "italic"],
            [LatoBold, "bold", "normal"],
            [LatoBoldItalic, "bold", "italic"],
            [LatoBlack, 900, "normal"],
            [LatoBlackItalic, 900, "italic"],
        ];
    }, []);

    const staatliches = React.useMemo<Font[]>(() => {
        return [[StaatlichesRegular, "normal", "normal"]];
    }, []);

    return (
        <Global
            styles={[
                ..._.map(lato, ([font, weight, style]) => {
                    return {
                        "@font-face": {
                            fontFamily: "Lato",
                            fontStyle: style,
                            fontWeight: weight,
                            src: `url(${font}) format("truetype")`,
                            fontDisplay: "swap",
                        },
                    };
                }),
                ..._.map(staatliches, ([font, weight, style]) => {
                    return {
                        "@font-face": {
                            fontFamily: "Staatliches",
                            fontStyle: style,
                            fontWeight: weight,
                            src: `url(${font}) format("truetype")`,
                            fontDisplay: "swap",
                        },
                    };
                }),
            ]}
        />
    );
};
