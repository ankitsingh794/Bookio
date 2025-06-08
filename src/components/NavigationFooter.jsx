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
            <Divider sx={{ backgroundColor: "#ffffff", height: "1px", width: "100%" }} />
            <div className="navigation-footer">

                <div className="items-4">
                    <div className="text-wrapper-2">Bookio</div>



                    <div className="social-icons">

                        <div className="text-wrapper-3">Follow our socials :</div>

                        <div className="icon-collect">
                            <FaFacebookF className="fb" />

                            <FaLinkedin className="lk" />

                            <FaInstagram className="ig" />

                            <FaYoutube className="yt" />
                        </div>
                    </div>
                </div>

                <div className="item-collect">
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
        </div>
    );
};
