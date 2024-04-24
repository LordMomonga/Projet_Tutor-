import { useEffect } from "react";

export const useScrollTo = (x = 0, y = 0) => {
    useEffect(() => {
        window.scrollTo(x, y);
    }, []);
};
