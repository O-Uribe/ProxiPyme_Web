import { Navigate, Outlet } from "react-router-dom";
import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./context/AuthContext";

import { profilReq } from "./api/auth";

function ProtectedRouter() {
    const { user, isAuthenticated } = useAuth();
    // console.log(user);
    let id = localStorage.getItem("id");
    // console.log(id);
    // console.log(user, isAuthenticated);

    if (!id) return <Navigate to="/loginPyme" replace />;

    return <Outlet />;
}

export default ProtectedRouter;
