import React from "react";
import { Lnavigation } from "../../components/Navigation";
import EventList from "./EventList";
import { NavigationFooter } from "../../components/NavigationFooter";
import "./Style/Event.css";

export const Event = () => {
    return (
        <div className="event" >
            <div className="div-5">
                <Lnavigation/>
                <EventList/>
                <NavigationFooter/>
            </div>
        </div>
    );
};

export default Event;