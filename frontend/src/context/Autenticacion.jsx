import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useRedirectIfAuthenticated(isAuthenticated, redirectTo) {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate(redirectTo);
        }
    }, [isAuthenticated, navigate, redirectTo]);
}
