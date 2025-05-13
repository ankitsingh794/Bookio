import React from "react";
import DropdownMenu from './dropDownMenu';
import "./Style/navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="items">
                <div className="text-wrapper">Home</div>

                <div className="text-wrapper">Support/Help</div>

                <div className="text-wrapper">Logout</div>

                <DropdownMenu/>
            </div>

            <div className="div">Bookio</div>
        </div>
    );
};