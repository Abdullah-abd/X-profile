import React from "react";
import styles from "./FilterPills.module.css";

const FilterPills = ({ option, onRemove }) => {
  return (
    <div className={styles.filterPills}>
      {option && ( // Ensure the filter string is not empty or null
        <div className={styles.pill}>
          <span>{option}</span>
          <button className={styles.closeButton} onClick={onRemove}>
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterPills;
