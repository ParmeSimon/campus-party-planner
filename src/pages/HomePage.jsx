import { EventCard } from "../components/EventCard";
import { useContext } from "react";
import { Grid } from "@mui/material";
import { EventContext } from "../context/EventContext";
import { } from "@mui/material";
import "../styles/pages/home-page.css";
import Box from '@mui/material/Box';

function HomePage() {
    const { events } = useContext(EventContext);

    return (
        <Box className="Container">
            <p variant="4" className="home-page-title">Tous les évenements - {events.length}</p>

            <Grid container spacing={1}>
                {events && events.map((event) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <EventCard key={event.id} event={event} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default HomePage;