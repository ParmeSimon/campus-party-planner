import "../styles/components/event-month.css";

function EventMonth({ events }) {


    if (!events || events.length === 0) {
        return (
            <div className="event-month--loading">
                <h2>⭐ Événement du mois</h2>
                <h3>Chargements des événements</h3>
            </div>
        );
    } else {
        return (
            <div className="event-month">
                <div className="event-month--left">
                    <h2>⭐ Événement du mois</h2>
                    <h3>{events[0].name}</h3>
                    <p>{events[0].description}</p>
                    <span>{events[0].category}</span>
                </div>
                <div className="event-month--right">
                    <img src={events[0].image} alt="Image événement" />
                </div>
            </div>
        );
    }
}

export default EventMonth;