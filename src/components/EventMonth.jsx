import "../styles/components/event-month.css";

function EventMonth({ events }) {

    const randomIndex = Math.floor(Math.random() * events.length);

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
                    <h3>{events[randomIndex].name}</h3>
                    <p>{events[randomIndex].description}</p>
                    <span>{events[randomIndex].category}</span>
                </div>
                <div className="event-month--right">
                    <img src={events[randomIndex].image} alt="Image événement"/>
                </div>
            </div>
        );
    }
}

export default EventMonth;