import { Box, Grid } from "@mui/material";
import { EventCard } from "./EventCard";
import "../styles/components/event-list.css";

function EventList({ events, search }) {

    const filteredEvents = events.filter((event) =>
        event.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box className="event-list-container">
            <p variant="4" className="event-list-title">Tous les évenements - {filteredEvents.length}</p>
            {events.length > 0 ? (
                <Grid container spacing={1}>
                    {events && filteredEvents.map((event) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <EventCard key={event.id} event={event} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <p variant="4" className="event-list-title">Aucun évenement trouvé</p>
            )}
        </Box>
    );
}
export default EventList;