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
    const url = city && category
    ? `${API_URL}/events?city=${city}&category=${category}` // ✅ & et pas ?
    : city
    ? `${API_URL}/events?city=${city}`
    : category
    ? `${API_URL}/events?category=${category}`
    : `${API_URL}/events`;
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