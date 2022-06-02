import { useIntersection } from "@mantine/hooks";
import React, { Suspense, SuspenseProps } from "react";
import Load from "./Load";

interface LazyLoadProps extends SuspenseProps {
    children: React.ReactNode;

    /**
     * Force the component to load when `true`. After the component is loaded, this prop has no effect. (i.e. `false` will not unload the component after it is loaded)
     *
     * @default false
     */
    loaded?: boolean;

    /**
     * Mount or unmount the component forcefully, toggling the `fallback` component. Set to `undefined` to use default behavior.
     *
     * @default undefined
     */
    forceLoaded?: boolean;

    /**
     * Distance between the component and the loading trigger. Number in pixels. String as percent.
     *
     * @default 0
     */
    margin?: string | number;

    /**
     * Intersection observer threshold at which amount of the target should be visible before rendering it. Must be a number between 0 and 1.
     *
     * Note that this defeats the purpose of Lazy Loading, since the point is to load the component immediately when it is in the viewport or even a little bit before!
     *
     * @default 0
     */
    threshold?: number;
}

export default ({
    children,
    forceLoaded,
    loaded = false,
    margin = 0,
    threshold = 0,
    ...suspenseProps
}: LazyLoadProps) => {
    const [isLoaded, setIsLoaded] = React.useState(loaded); // Once true, always true
    const [observerRef, observer] = useIntersection({
        threshold,
        rootMargin: typeof margin === "number" ? `${margin}px` : margin,
    });

    React.useEffect(() => {
        setIsLoaded((current) => {
            if (forceLoaded !== undefined) {
                return forceLoaded;
            }
            if (loaded || observer?.isIntersecting) {
                return true;
            }
            return current;
        });
    }, [loaded, observer?.isIntersecting, forceLoaded]);

    return (
        <>
            {!isLoaded && <div ref={observerRef} />}
            <Suspense {...suspenseProps}>
                {isLoaded ? children : <Load />}
            </Suspense>
        </>
    );
};
