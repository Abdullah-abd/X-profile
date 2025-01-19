import React from "react";
import styles from "./EditProfileModal.module.css";
import { updateProfile } from "../../profiles";
const EditProfileModal = ({ isOpen, onClose, profile }) => {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedProfile = {
      id: profile.id, // Retain the existing ID
      name: formData.get("name"),
      photo: formData.get("photo"),
      description: formData.get("description"),
      address: formData.get("address"),
      contact: formData.get("contact"),
      interest: formData.get("interest"),
      age: formData.get("age"),
    };
    updateProfile(updatedProfile)
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Name:
            <input type="text" name="name" defaultValue={profile.name} required />
          </label>
          <label>
            Photo URL:
            <input type="text" name="photo" defaultValue={profile.photo} required />
          </label>
          <label>
            Description:
            <textarea name="description" defaultValue={profile.description} required></textarea>
          </label>
          <label>
            Address:
            <input type="text" name="address" defaultValue={profile.address} required />
          </label>
          <label>
            Contact:
            <input type="text" name="contact" defaultValue={profile.contact} required />
          </label>
          <label>
            Interest:
            <input type="text" name="interest" defaultValue={profile.interest} required />
          </label>
          <label>
            Age:
            <input type="number" name="age" defaultValue={profile.age} required />
          </label>
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.saveButton}>Save</button>
            <button type="button" className={styles.cancelButton} onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
