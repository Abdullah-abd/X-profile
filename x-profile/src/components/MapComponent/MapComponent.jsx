import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import image from "../../assets/map_9065739.png";
import styles from "../MapComponent/MapComponent.module.css";

const customIcon = L.icon({
  iconUrl: image,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const MapComponent = ({ location }) => {
  const [coordinates, setCoordinates] = useState(null); // Initially, no coordinates
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchCoordinates = async () => {
      if (!location) return; // Prevent API call if no location provided

      setLoading(true); // Set loading to true before making the API call
      
      const apiKey = "2d40840143ad4db8ad5c0fa8c4663fc3"; // Replace with your API key
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${apiKey}`;

      try {
        const response = await axios.get(url);
        if (response.data.results.length > 0) {
          const { lat, lng } = response.data.results[0].geometry;
          setCoordinates({ lat, lng }); // Set coordinates after successful fetch
        } else {
          console.error("Location not found.");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error.message);
      } finally {
        setLoading(false); // Set loading to false after the API call
      }
    };

    fetchCoordinates();
  }, [location]); // Trigger fetch when location prop changes

  // Return nothing or a loading indicator if coordinates are not loaded
  if (loading || !coordinates) {
    return <div>Loading map...</div>; // You can replace this with a more sophisticated loading UI
  }

  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lng]} // Center on fetched coordinates
      zoom={13}
      className={styles.mapContainer}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[coordinates.lat, coordinates.lng]} icon={customIcon}>
        <Popup>
          <div>
            <h4>Location Marker</h4>
            <p>Location: {location}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
