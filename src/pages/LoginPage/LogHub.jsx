import React from "react";
import { Lnavigation } from "../../components/Navigation";
import Register from "./Register";
import ForgPass from "./ForgotPass";
import Login from "./Login";
import { NavigationFooter } from "../../components/NavigationFooter";
import "./Style/LogHub.css";

export const RegisterForm = () => {
    return (
        <div className="loghub" >
            <div className="div-4">
                <Lnavigation/>
                <Register/>
                {/* <ForgPass/> */}
                {/* <Login/> */}
                <NavigationFooter/>
            </div>
        </div>
    );
};

export const LoginForm = () => {
    return (
        <div className="loghub" >
            <div className="div-4">
                <Lnavigation/>
                {/* <ForgPass/> */}
                <Login/>
                <NavigationFooter/>
            </div>
        </div>
    );
};

export const ForgotPassForm = () => {
    return (
        <div className="loghub" >
            <div className="div-4">
                <Lnavigation/>
                <ForgPass/>
                <NavigationFooter/>
            </div>
        </div>
    );
};
