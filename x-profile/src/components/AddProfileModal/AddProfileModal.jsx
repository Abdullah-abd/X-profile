import React from "react";
import styles from "./AddProfileModal.module.css";
import { addProfile } from "../../profiles";

const AddProfileModal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newProfile = {
      id: Date.now(),
      name: formData.get("name"),
      photo: formData.get("photo"),
      description: formData.get("description"),
      address: formData.get("address"),
      contact: formData.get("contact"),
      interest: formData.get("interest"),
      age: formData.get("age"),
    };
    addProfile(newProfile)
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Add New Profile</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Photo URL:
            <input type="text" name="photo" required />
          </label>
          <label>
            Description:
            <textarea name="description" required></textarea>
          </label>
          <label>
            Address:
            <input type="text" name="address" required />
          </label>
          <label>
            Contact:
            <input type="text" name="contact" required />
          </label>
          <label>
            Interest:
            <input type="text" name="interest" required />
          </label>
          <label>
            Age:
            <input type="number" name="age" required />
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

export default AddProfileModal;
