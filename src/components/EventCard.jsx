import '../styles/components/event-card.css';
export const EventCard = ({ event }) => {
    return (
        <div className="card">
            <img src={event.image} alt={event.name} />
            <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">{event.description}</p>
                <p className="card-text">{event.date}</p>
                <p className="card-text">{event.location}</p>
                <p className="card-text">{event.city}</p>
            </div>
        </div>
    )
}