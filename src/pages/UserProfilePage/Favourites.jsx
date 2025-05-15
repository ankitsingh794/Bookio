import React, { useState } from "react";
import "./Style/Favourites.css";
import { styled } from '@mui/material/styles';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid
} from "@mui/material";

const mockFavourites = [
  { id: 1, title: "Coldplay", description: "One of the best live bands.", image: "https://picsum.photos/id/1005/300/200" },
  { id: 2, title: "Tomorrowland", description: "Top electronic event.", image: "https://picsum.photos/id/1011/300/200" },
  { id: 3, title: "Arijit Singh", description: "Soulful Bollywood singer.", image: "https://picsum.photos/id/1027/300/200" },
  { id: 4, title: "BTS", description: "K-pop global sensation.", image: "https://picsum.photos/id/1035/300/200" },
  { id: 5, title: "Sunburn", description: "India’s EDM event.", image: "https://picsum.photos/id/1041/300/200" },
  { id: 6, title: "Shreya Ghoshal", description: "Melodious voice.", image: "https://picsum.photos/id/1052/300/200" },
];


const Favourites = () => {
    const [filter, setFilter] = useState("all");

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className="favourites-container">
            <div className="favourites-header">
                <Typography variant="h4">Favourites</Typography>
                <FormControl size="small">
                    <InputLabel id="filter-label">Filter</InputLabel>
                    <Select
                        labelId="filter-label"
                        id="filter-select"
                        value={filter}
                        label="Filter"
                        onChange={handleFilterChange}
                    >
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="artists">Artists</MenuItem>
                        <MenuItem value="events">Events</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 12, sm: 12, md: 12 }}
            >
                {mockFavourites.map((fav) => (
                    <Grid
                        key={fav.id}
                        size={{ xs: 12, sm: 6, md: 4 }}
                    >
                        <Card className="favourite-card">
                            <CardMedia
                                component="img"
                                className="favourite-image"
                                image={fav.image}
                                alt={fav.title}
                            />
                            <CardContent>
                                <Typography variant="h6">{fav.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {fav.description}
                                </Typography>
                                <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                                    View
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Favourites;
