import { useContext, useEffect } from 'react';
import { EventContext } from '../context/EventContext';
import '../styles/components/city-selector.css';

function CitySelector() {
  const { cities, selectedCity, setSelectedCity } = useContext(EventContext);

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
  };

  return (
    <select id="city" className="city-selector__select" value={selectedCity} onChange={handleCityChange}>
        <option value="">Toutes les villes</option>
        {cities.map((city) => (
            <option key={city} value={city}>
                {city}
            </option>
        ))}
    </select>
  );
}

export default CitySelector;
