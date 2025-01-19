import React from "react";
import styles from "./ProfileCard.module.css";

const AdminProfileCard = ({ profile, onEdit, onDelete }) => {
  const { name, photo, description } = profile;

  return (
    <div className={styles.card}>
      <img src={photo} alt={`${name}'s profile`} className={styles.photo} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.buttonGroup}>
        <button
          className={styles.editButton}
          onClick={() => onEdit(profile)}
        >
          Edit
        </button>
        <button
          className={styles.deleteButton}
          onClick={() => onDelete(profile.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminProfileCard;
