import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loading from "../Loading";
import SmartSuspense from "../SmartSuspense";

const MIN_LOADING_TIME = 2500;

const Home = React.lazy(() => import("../../pages/Home"));

export default () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [animationRan, setAnimationRan] = React.useState(false);
    const { t } = useTranslation();

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationRan(true);
        }, MIN_LOADING_TIME);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <BrowserRouter>
            <Loading
                visible={!animationRan || isLoading}
                size={100}
                overlayOpacity={1}
                animationDuration={3000}
                message={t("welcome")}
                fixed
                locked
            />
            <SmartSuspense onLoad={() => setIsLoading(false)}>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </SmartSuspense>
        </BrowserRouter>
    );
};
