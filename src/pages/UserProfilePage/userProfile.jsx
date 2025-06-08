import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Lnavigation } from "../../components/Navigation";
import { NavigationFooter } from "../../components/NavigationFooter";
import { Box } from "./personalInfo";
import { ProfilePic } from "./ProfilePic";
import TicketRelatedInfo from "./TicketRelatedInfo";
import Favourites from "./Favourites";
import "./Style/userProfile.css";

export const Profilepage = () => {
    const ticketRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo === "tickets") {
            ticketRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div className="profile-page">
            <div className="div-3">
                <Lnavigation />

                <div className="container">
                    <Box />
                    <ProfilePic />
                </div>

                <Favourites />

                <div ref={ticketRef}>
                    <TicketRelatedInfo />
                </div>

                <NavigationFooter />
            </div>
        </div>
    );
};

export default Profilepage;
