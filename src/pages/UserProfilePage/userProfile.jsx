import React from "react";
import { Navbar } from "./navbar";
import { NavigationFooter } from "./NavigationFooter-1";
import { Box } from "./personalInfo";
import { ProfilePic } from "./profilePic";
import TicketRelatedInfo  from "./TicketRelatedInfo";
import  Favourites  from "./Favourites";
import "./Style/userProfile.css";

export const Profilepage = () => {
    return (
        <div className="profile-page">
            <div className="div-3">
                <Navbar />
                <Box />
                <ProfilePic />
                <Favourites />
                <TicketRelatedInfo/>
                <NavigationFooter/>
            </div>
        </div>
    );
};

export default Profilepage;