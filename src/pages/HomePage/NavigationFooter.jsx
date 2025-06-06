import React from "react";
import Divider from '@mui/material/Divider';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Style/NavigationFooter.css";

export const NavigationFooter = () => {
    return (
        <div className="footer">
            <Divider sx={{ backgroundColor: "#e0e0e0", height: "1px", width: "100%" }} />
            <div className="navigation-footer">

                <div className="items-4">
                    <div className="text-wrapper-2">Bookio</div>

                    

                    <div className="social-icons">

                        <div className="text-wrapper-3">Follow our socials :</div>


                        <FaFacebookF className="icons"/>

                        <FaLinkedin className="icons"/>

                        <FaInstagram className="icons"/>

                        <FaYoutube className="icons"/>
                    </div>
                </div>


                <div className="items">
                    <div className="text-wrapper">Topic</div>
                    <div className="div">Page</div>
                    <div className="div">Page</div>
                    <div className="div">Page</div>
                </div>

                <div className="items-2">
                    <div className="text-wrapper">Topic</div>
                    <div className="div">Page</div>
                    <div className="div">Page</div>
                    <div className="div">Page</div>
                </div>

                <div className="items-3">
                    <div className="text-wrapper">Topic</div>
                    <div className="div">Page</div>
                    <div className="div">Page</div>
                    <div className="div">Page</div>
                </div>

            </div>
        </div>
    );
};
