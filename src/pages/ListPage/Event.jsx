import React from "react";
import { Navbar2 } from "./navbar-2";
import EventList from "./EventList";
import { NavigationFooter } from "./NavigationFooter-3";
import "./Style/Event.css";

export const Event = () => {
    return (
        <div className="event" >
            <div className="div-5">
                <Navbar2/>
                <EventList/>
                <NavigationFooter/>
            </div>
        </div>
    );
};

export default Event;