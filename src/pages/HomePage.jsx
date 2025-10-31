import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import Header from "../components/Header";
import EventMonth from "../components/EventMonth";
import EventList from "../components/EventList";
import "../styles/pages/home-page.css";
import ButtonsFilter from "../components/ButtonsFilter";
import SearchFilter from "../components/SearchFilter";

function HomePage() {
    const { events, search } = useContext(EventContext);

    return (
        <main>
            <Header />
            <EventMonth events={events} />
            <SearchFilter />
            <ButtonsFilter />
            <EventList events={events} search={search} />
        </main>
    )
}

export default HomePage;