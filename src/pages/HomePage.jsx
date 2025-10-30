import { useContext } from "react";
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