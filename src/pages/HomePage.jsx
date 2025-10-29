import { EventCard } from "../components/EventCard";
import { useContext } from "react";
import { EventContext } from "../context/EventContext";
function HomePage() {
    const { events } = useContext(EventContext);

    return (
        <div>
            {events && events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    )
}

export default HomePage;