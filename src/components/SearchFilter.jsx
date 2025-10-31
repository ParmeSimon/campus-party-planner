import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import "../styles/components/search-filter.css";

function SearchFilter() {

    const { search, setSearch } = useContext(EventContext);

    return (
        <div className="search-bar">
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un événement..."/>
        </div>
    );
}

export default SearchFilter;