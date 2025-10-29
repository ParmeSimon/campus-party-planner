import { createContext, useState } from 'react';
import { fetchEvents, fetchCities } from '../services/api';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [likedEvents, setLikedEvents] = useState([]);

    useEffect(() => {
        loadLike()
    }, []);


    useEffect(() => {
        setSelectedCity(selectedCity);
        fetchEvents(selectedCity).then(setEvents);
        fetchCities().then(setCities);
    }, [selectedCity]);

    const toggleLike = (event) => {
        let updatedLikes;
        if (likedEvents.includes(event.id)) {
            updatedLikes = likedEvents.filter(id => id !== event.id);
        } else {
            updatedLikes = [...likedEvents, event.id];
        }
        setLikedEvents(updatedLikes);
        saveLikes(updatedLikes);
    }

    const saveLikes = (updatedLikes) => {
        localStorage.setItem('likedEvents', JSON.stringify(updatedLikes));

    }

    const loadLike = async () => {
        const likedEvents = await localStorage.getItem('likedEvents');
        if (likedEvents) {
            setLikedEvents(JSON.parse(likedEvents));
        }
    }

    return (
        <EventContext.Provider value={{ events, selectedCity, likedEvents, setSelectedCity, setLikedEvents, setEvents, toggleLike }}>
            {children}
        </EventContext.Provider>
    )
}