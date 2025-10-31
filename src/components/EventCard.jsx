import '../styles/components/event-card.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import { Link } from 'react-router-dom';
export const EventCard = ({ event }) => {
    const { toggleLike, likedEvents } = useContext(EventContext);

    const handleClick = (event, e) => {
        toggleLike(event);
        e.preventDefault();
    }

    return (
        <Link to={`/event/${event.id}`} className='card-link'>
            <div className="card">
                <div className="card-header">
                    <div className="card-icons" onClick={(e) => handleClick(event, e)}>
                        {likedEvents.includes(event.id) ?
                            <FavoriteIcon className="card-icon favorite-filled" sx={{ fontSize: '1.2rem' }} /> :
                            <FavoriteBorderIcon className="card-icon favorite-empty" sx={{ fontSize: '1.2rem' }} />}
                    </div>
                    <img className="card-image" src={event.image} alt={event.name} />
                    <span className="card-category">{event.category}</span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <p className="card-text"><CalendarMonthIcon className="card-icon" sx={{ fontSize: '1.2rem' }} /> {event.date}</p>
                    <p className="card-text"><LocationOnIcon className="card-icon" sx={{ fontSize: '1.2rem' }} /> {event.location} - {event.city}</p>
                    <p className="card-description">{event.description}</p>
                </div>
            </div>
        </Link>

    )
}