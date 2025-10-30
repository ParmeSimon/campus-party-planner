import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";



export default function Map({ address }) {
    const [coords, setCoords] = useState(null);


    useEffect(() => {
        if (!address) return;
        async function fetchCoords() {
            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
                );
                const data = await response.json();
                if (data && data.length > 0) {
                    setCoords({
                        lat: parseFloat(data[0].lat),
                        lng: parseFloat(data[0].lon),
                    });
                }
            } catch (error) {
                console.error("Erreur de géocodage :", error);
            }
        }
        fetchCoords();
    }, [address]);

    if (!coords) return <p>Chargement de la carte...</p>;

    return (
        <MapContainer
            center={[coords.lat, coords.lng]}
            zoom={15}
            style={{ height: "100%", width: "100%", borderRadius: "10px" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[coords.lat, coords.lng]}>
                <Popup>{address}</Popup>
            </Marker>
        </MapContainer>
    );
}
