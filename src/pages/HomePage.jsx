import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import EventList from "../components/EventList";

function HomePage() {
    const { events } = useContext(EventContext);

    return (
        <EventList events={events} />
    )
}

export default HomePage;