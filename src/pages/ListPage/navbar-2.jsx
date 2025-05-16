import React from "react";
import DropdownMenu from '../UserProfilePage/dropDownMenu';
import "./Style/navbar-2.css";

export const Navbar2 = () => {
    return (
        <div className="navbar-2">
            <div className="div">Bookio</div>

            <div className="items">
                <div className="text-wrapper">Home</div>

                <div className="text-wrapper">Support/Help</div>

                <div className="text-wrapper">Logout</div>

                <DropdownMenu/>
            </div>
        </div>
    );
};