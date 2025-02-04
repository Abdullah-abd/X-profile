import React, { useState } from "react";
import MapComponent from "../MapComponent/MapComponent";
import styles from "../Profile/ProfileCard.module.css";

const ProfileCard = ({ profile, expandedProfileId, onCardClick,handleProfile }) => {
  const isMapVisible = expandedProfileId === profile.id;
  // console.log(profile.address)
  const HandleButtonClick = (profile, e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up
    onCardClick(profile.id); // Pass profile to the parent function
  };

  return (
    <div className={styles.card} onClick={handleProfile}>
      <div><img src={profile.photo} alt={profile.name} className={styles.image} /></div>
      <h2 className={styles.name}>{profile.name}</h2>
      <p className={styles.description}>{profile.description}</p>
      <button className={styles.button} onClick={(e) => HandleButtonClick(profile, e)}>
      {isMapVisible ? "Hide Summary" : "Show Summary"}
      </button>
      {isMapVisible && <MapComponent location={profile.address} />}
    </div>
  );
};

export default ProfileCard;
