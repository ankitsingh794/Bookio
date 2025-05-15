import React, { useState } from "react";
import "./Style/Favourites.css";
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
} from "@mui/material";
import { Grid } from "@mui/material";


const mockFavourites = [
    {
        id: 1,
        title: "Coldplay",
        description: "One of the best live bands in the world. Favourite for many.",
        image: "https://via.placeholder.com/100",
    },
    {
        id: 2,
        title: "Tomorrowland",
        description: "Top electronic music event known for its energy.",
        image: "https://via.placeholder.com/100",
    },
    {
        id: 3,
        title: "Arijit Singh",
        description: "Soulful singer with massive fan following.",
        image: "https://via.placeholder.com/100",
    },
];

const Favourites = () => {
    const [filter, setFilter] = useState("all");

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className="favourites-container">
            <div className="favourites-header">
                <Typography variant="h6">Favourites</Typography>
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

            <Grid container spacing={2}>
                {mockFavourites.map((fav) => (
                    <Grid key={fav.id} sx={{ flex: 1 , flexDirection: "column"}}> {/* Updated here */}
                        <Card className="favourite-card">
                            <CardMedia
                                component="img"
                                className="favourite-image"
                                image={fav.image}
                                alt={fav.title}
                            />
                            <Box className="favourite-content">
                                <CardContent>
                                    <Typography variant="h6">{fav.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {fav.description}
                                    </Typography>
                                    <Button variant="outlined" size="small" style={{ marginTop: 8 }}>
                                        View
                                    </Button>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>


        </div>
    );
};

export default Favourites;
