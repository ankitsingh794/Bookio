import React from "react";
import { Navbar1 } from "./navbar-1";
import Register from "./Register";
import { NavigationFooter } from "./NavigationFooter-2";
import "./Style/LogHub.css";

export const LogHub = () => {
    return (
        <div className="loghub" >
            <div className="div-4">
                <Navbar1/>
                <Register/>
                <NavigationFooter/>
            </div>
        </div>
    );
};

export default LogHub;