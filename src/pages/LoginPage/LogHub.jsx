import React from "react";
import { Navbar1 } from "./navbar-1";
import Register from "./Register";
// import ForgPass from "./ForgotPass";
// import Login from "./Login";
import { NavigationFooter } from "./NavigationFooter-2";
import "./Style/LogHub.css";

export const LogHub = () => {
    return (
        <div className="loghub" >
            <div className="div-4">
                <Navbar1/>
                <Register/>
                {/* <ForgPass/> */}
                {/* <Login/> */}
                <NavigationFooter/>
            </div>
        </div>
    );
};

export default LogHub;