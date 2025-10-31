const API_URL = 'http://localhost:3000/api';

export async function fetchCities() {
    const url = `${API_URL}/cities`
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}

export async function fetchEvents(city = null, category = null) {
    const params = new URLSearchParams();
    if (city) params.append("city", city);
    if (category) params.append("category", category);
    const url = `${API_URL}/events${params.toString() ? `?${params}` : ""}`;
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