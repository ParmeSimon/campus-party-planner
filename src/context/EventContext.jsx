import { createContext, useState, useEffect } from 'react';
import { fetchEvents, fetchCities, fetchStats, fetchCategories } from '../services/api';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [likedEvents, setLikedEvents] = useState([]);
    const [stats, setStats] = useState({});
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        loadLike();
        fetchEvents().then(setEvents);
        fetchCities().then(setCities);
        fetchStats().then(setStats);
        fetchCategories().then(setCategories);
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        if (isDarkMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [isDarkMode]);

    useEffect(() => {
        fetchEvents(selectedCity, selectedCategories).then(setEvents);
    }, [selectedCity, selectedCategories]);

    const toggleLike = (event) => {
        let updatedLikes;
        if (likedEvents.includes(event.id)) {
            updatedLikes = likedEvents.filter(id => id !== event.id);
        } else {
            updatedLikes = [...likedEvents, event.id.toString()];
        }
        setLikedEvents(updatedLikes);
        saveLikes(updatedLikes);
    }

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
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
        <EventContext.Provider value={{ isDarkMode, toggleDarkMode, events, cities, selectedCity, likedEvents, setSelectedCity, setLikedEvents, setEvents, toggleLike, categories, stats, selectedCategories, setSelectedCategories }}>
            {children}
        </EventContext.Provider>
    )
}