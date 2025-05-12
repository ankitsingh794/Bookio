import React from "react";
import {BuildingBlocksMenu} from "./asset/BuildingBlocksMenu";
import "./Style/navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="items">
                <div className="text-wrapper">Home</div>

                <div className="text-wrapper">Support/Help</div>

                <div className="text-wrapper">Logout</div>

                <BuildingBlocksMenu
                    buildingBlocksTypeIconClassName = "building-blocks-menu-list-item"
                    labelText = "Settings"
                    labelTextClassName = "building-blocks-menu-instance"
                    showDivider = {false}
                    stateProp = "enabled"
                    typeIconWrapperTypeIconClassName = "building-blocks-menu-list-item-instance"
                />
            </div>

            <div className="div">Bookio</div>
        </div>
    );
};