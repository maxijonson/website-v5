import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

i18next
    .use(LanguageDetector) // https://www.npmjs.com/package/i18next-browser-languagedetector
    .use(initReactI18next) // https://react.i18next.com/
    .use(
        // https://www.i18next.com/how-to/add-or-load-translations#lazy-load-in-memory-translations
        resourcesToBackend(async (lng, ns, cb) => {
            try {
                const resx = await import(`./locales/${lng}/${ns}.json`);
                cb(null, resx);
            } catch (error: any) {
                cb(error, null);
            }
        })
    )
    .init({
        // debug: process.env.NODE_ENV === "development",
        fallbackLng: "en",
        supportedLngs: ["en", "fr"],
        nonExplicitSupportedLngs: false,
        interpolation: {
            escapeValue: false,
        },
    });
