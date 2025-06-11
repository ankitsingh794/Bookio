import React from "react";
import Divider from '@mui/material/Divider';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Style/NavigationFooter.css";

function useIsMobile() {
  return window.matchMedia("(max-width: 600px)").matches;
}

export const NavigationFooter = () => {
    const isMobile = useIsMobile();

    // Responsive styles
    const footerStyle = {
        minHeight: isMobile ? "8vh" : "14vh",
        marginTop: isMobile ? "5vh" : "30vh",
        padding: isMobile ? "0.5rem" : undefined,
    };

    const navigationFooterStyle = {
        flexDirection: isMobile ? "column" : "row",
        padding: isMobile ? "0.7rem 0.5rem" : "1.39rem 1.39rem",
        gap: isMobile ? "0.5rem" : "0.69rem",
        width: "100vw",
    };

    const items4Style = {
        gap: isMobile ? "0.4rem" : "2rem",
        fontSize: isMobile ? "0.9rem" : undefined,
        display: "flex",
        flexDirection: "column",
    };

    const textWrapper2Style = {
        fontFamily: '"Bad Script", cursive',
        fontWeight: 400,
        color: "#00ffe0",
        fontSize: isMobile ? "1.7rem" : "3rem",
        lineHeight: isMobile ? "2rem" : undefined,
        marginBottom: isMobile ? "0.5rem" : undefined,
    };

    const socialIconsStyle = {
        flexDirection: isMobile ? "row" : "column",
        gap: isMobile ? "0.5rem" : "0.25rem",
        alignItems: isMobile ? "center" : "flex-start",
        display: "flex",
        flexWrap: "wrap",
    };

    const textWrapper3Style = {
        fontSize: isMobile ? "0.85rem" : undefined,
        lineHeight: isMobile ? "1.2" : undefined,
        color: "#B9D9EB",
        fontFamily: "var(--subheading-font-family)",
    };

    const iconCollectStyle = {
        gap: isMobile ? "0.5rem" : "0.85rem",
        display: "flex",
        flexDirection: "row",
        cursor: "pointer",
    };

    const iconSize = isMobile ? "1.3rem" : "2rem";

    const itemCollectStyle = {
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "1.5rem" : "10rem",
        marginRight: isMobile ? 0 : "3rem",
        marginTop: isMobile ? "1rem" : "2rem",
        display: "flex",
        cursor: "pointer",
    };

    const itemsStyle = {
        gap: isMobile ? "0.4rem" : "0.69rem",
        fontSize: isMobile ? "0.9rem" : undefined,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
    };

    const textWrapperStyle = {
        fontSize: isMobile ? "0.75rem" : "0.875rem",
        lineHeight: isMobile ? "1.2" : "1.5",
        color: "#99FFFF",
        fontFamily: "var(--small-text-font-family, Arial)",
        fontWeight: "var(--small-text-font-weight, 500)",
        letterSpacing: "var(--small-text-letter-spacing, 0.03125rem)",
    };

    const divStyle = {
        ...textWrapperStyle,
        color: "#FFF0F5",
    };

    return (
        <div className="footer" style={footerStyle}>
            <Divider sx={{ backgroundColor: "#ffffff", height: "1px", width: "100%" }} />
            <div className="navigation-footer" style={navigationFooterStyle}>

                <div className="items-4" style={items4Style}>
                    <div className="text-wrapper-2" style={textWrapper2Style}>Bookio</div>
                    <div className="social-icons" style={socialIconsStyle}>
                        <div className="text-wrapper-3" style={textWrapper3Style}>Follow our socials :</div>
                        <div className="icon-collect" style={iconCollectStyle}>
                            <FaFacebookF className="fb" style={{ color: "#1877F2", height: iconSize, width: iconSize }} />
                            <FaLinkedin className="lk" style={{ color: "#0A66C2", height: iconSize, width: iconSize }} />
                            <FaInstagram className="ig" style={{ color: "#E1306C", height: iconSize, width: iconSize }} />
                            <FaYoutube className="yt" style={{ color: "#FF0000", height: iconSize, width: iconSize }} />
                        </div>
                    </div>
                </div>

                <div className="item-collect" style={itemCollectStyle}>
                    <div className="items" style={itemsStyle}>
                        <div className="text-wrapper" style={textWrapperStyle}>Topic</div>
                        <div className="div" style={divStyle}>Page</div>
                        <div className="div" style={divStyle}>Page</div>
                        <div className="div" style={divStyle}>Page</div>
                    </div>
                    <div className="items-2" style={itemsStyle}>
                        <div className="text-wrapper" style={textWrapperStyle}>Topic</div>
                        <div className="div" style={divStyle}>Page</div>
                        <div className="div" style={divStyle}>Page</div>
                        <div className="div" style={divStyle}>Page</div>
                    </div>
                    <div className="items-3" style={itemsStyle}>
                        <div className="text-wrapper" style={textWrapperStyle}>Topic</div>
                        <div className="div" style={divStyle}>Page</div>
                        <div className="div" style={divStyle}>Page</div>
                        <div className="div" style={divStyle}>Page</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
