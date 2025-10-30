import { EventCard } from "../components/EventCard";
import { useContext } from "react";
import { Grid } from "@mui/material";
import { EventContext } from "../context/EventContext";
import EventList from "../components/EventList";
import Header from "../components/Header";

function HomePage() {
    const { events } = useContext(EventContext);

    return (
        <Header/>
    )
}

export default HomePage;