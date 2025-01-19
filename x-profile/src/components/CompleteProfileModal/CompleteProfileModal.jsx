import React from 'react';
import styles from './CompleteProfileModal.module.css';

const CompleteProfileModal = ({ profile, isOpen, onClose }) => {
  if (!isOpen) return null;

  const { name, photo, description, address, contact, interest, age, gender } = profile;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.card}>
          <img src={photo} alt="profile" className={styles.image} />
          <div className={styles.details}>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.description}><strong>Description:</strong> {description}</p>
            <p className={styles.detailItem}><strong>Address:</strong> {address}</p>
            <p className={styles.detailItem}><strong>Contact:</strong> {contact}</p>
            <p className={styles.detailItem}><strong>Interest:</strong> {interest}</p>
            <p className={styles.detailItem}><strong>Age:</strong> {age}</p>
            <p className={styles.detailItem}><strong>Gender:</strong> {gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfileModal;
