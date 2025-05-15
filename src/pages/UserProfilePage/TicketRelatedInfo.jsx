import React from "react";
import "./Style/TicketRelatedInfo.css";
import { Card, CardContent, Typography, Divider, List, ListItem, ListItemText } from "@mui/material";
import { LocalOffer } from "@mui/icons-material";

const sectionData = [
  { title: "Upcoming Bookings", items: ["Event 1", "Event 2", "Event 3"] },
  { title: "Past Events Attended", items: ["Event A", "Event B", "Event C"] },
  { title: "Booking History", items: ["Event X", "Event Y", "Event Z"] },
];

const TicketRelatedInfo = () => {
  return (
    <Card className="ticket-card">
      <CardContent>
        <Typography variant="h4" className="ticket-title" gutterBottom>
          Ticket-Related Information
        </Typography>

        {sectionData.map((section, idx) => (
          <div key={idx} className="segment">
            {idx !== 0 && <Divider className="section-divider" />}
            <Typography variant="h6" className="section-title">
              <LocalOffer />
              {section.title}
            </Typography>
            <List dense disablePadding className="section-list">
              {section.items.map((item, i) => (
                <ListItem key={i} className="section-list-item">
                  <ListItemText primary={`• ${item}`} />
                </ListItem>
              ))}
            </List>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TicketRelatedInfo;
