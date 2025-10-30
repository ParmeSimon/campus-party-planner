import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import Header from "../components/Header";
import EventMonth from "../components/EventMonth";
import EventList from "../components/EventList";
import "../styles/pages/home-page.css";
import ButtonsFilter from "../components/ButtonsFilter";

function HomePage() {
    const { events } = useContext(EventContext);

    return (
        <main>
            <Header />
            <EventMonth events={events} />
            <ButtonsFilter />
            <EventList events={events} />
        </main>
    )
}

export default HomePage;