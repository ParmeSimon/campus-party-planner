import { useParams } from "react-router";
import { fetchEvent } from "../services/api";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import "../styles/pages/event-page.css";
import { useNavigate } from "react-router-dom";
function EventPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        fetchEvent(id).then(setEvent);
    }, [id]);

    if (!event) return <p>Chargement...</p>;

    return (
        <>
            <Header />
            <div className="back-button-container">
                <button onClick={() => navigate("/")} className="back-button">Retour</button>
            </div>
            <div className="row">
                <div className="card-event-page">
                    <div className="event-page">
                        <img src={event.image} alt={event.name} className="event-page-image" />
                        <h1>{event.name}</h1>
                        <p>{event.description}</p>
                        <p>{event.date}</p>
                        <p>{event.location}</p>
                    </div>
                </div>

                <div className="google-map">
                    <Map address={event.location + " " + event.city} />
                </div>
            </div>
        </>
    );
}

export default EventPage;
