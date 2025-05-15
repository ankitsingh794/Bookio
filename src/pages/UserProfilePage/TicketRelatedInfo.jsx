import React from "react";
import { Card, CardContent, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { LocalOffer } from "@mui/icons-material"; // Ticket tag icon

const sectionData = [
  { title: "Upcoming Bookings", items: ["Event 1", "Event 2", "Event 3"] },
  { title: "Past Events Attended", items: ["Event A", "Event B", "Event C"] },
  { title: "Booking History", items: ["Event X", "Event Y", "Event Z"] },
];

const TicketRelatedInfo = () => {
  return (
    <Card sx={{ maxWidth: 1200, margin: "auto", mt: 4, border: "1px solid #e0e0e0" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Ticket-Related Information
        </Typography>

        {sectionData.map((section, idx) => (
          <div key={idx}>
            {idx !== 0 && <Divider sx={{ my: 2 }} />}
            <Typography variant="subtitle1" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocalOffer fontSize="small" sx={{ mr: 1 }} />
              {section.title}
            </Typography>
            <List dense disablePadding>
              {section.items.map((item, i) => (
                <ListItem key={i} sx={{ pl: 4 }}>
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
