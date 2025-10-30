import { createContext, useState, useEffect } from 'react';
import { fetchEvents, fetchCities, fetchStats } from '../services/api';
import { data } from 'react-router-dom';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [likedEvents, setLikedEvents] = useState([]);
    const [stats, setStats] = useState({});

    useEffect(() => {
        loadLike();
        fetchEvents().then(setEvents);
        fetchCities().then(setCities);
        fetchStats().then(setStats);
    }, []);

    useEffect(() => {
        fetchEvents(selectedCity).then(setEvents);
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
        <EventContext.Provider value={{ events, selectedCity, likedEvents, setSelectedCity, setLikedEvents, setEvents, toggleLike, stats }}>
            {children}
        </EventContext.Provider>
    )
}