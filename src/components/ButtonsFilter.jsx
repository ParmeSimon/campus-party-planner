import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import "../styles/components/buttons-filter.css";

function ButtonsFilter() {

    const { selectedCategories, setSelectedCategories } = useContext(EventContext);    


    const categories = ["", "soirée", "concert", "festival", "open-air"]

    return (
        <div className="category-btns">
            {categories.map((cat) => (
                <button
                key={cat || "all"}
                className={`category-btn ${selectedCategories === cat ? "active" : ""}`}
                onClick={() => setSelectedCategories(cat)}
                >
                {cat === "" ? "Tous" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
            ))}
        </div>
    );
}

export default ButtonsFilter;