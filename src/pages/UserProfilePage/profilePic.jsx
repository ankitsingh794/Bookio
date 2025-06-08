import React from "react";
import "./Style/profilePic.css";

export const ProfilePic = () => {
    return (
        <div className="profile-pic">
            <div className="image"/>

            <div className="text-wrapper" style={{cursor:'pointer'}}> Update/Insert a profile picture</div>
        </div>
    );
};