const API_URL = 'http://localhost:3000/api';

export async function fetchCities() {
    const url = `${API_URL}/cities`
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}

export async function fetchEvents(city = null) {
    const url = city ? `${API_URL}/events?city=${city}` :
        `${API_URL}/events`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}

export async function fetchCategories() {
    const url = `${API_URL}/categories`
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}

export async function fetchStats() {
    const url = `${API_URL}/stats`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}

export async function fetchEvent(id) {
    const url = `${API_URL}/events/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}