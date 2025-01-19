import React, { useState } from "react";
import profiles from "../../profiles";
import ProfileCard from "../../components/Profile/ProfileCards";
import styles from "./Home.module.css";
import CompleteProfileModal from "../../components/CompleteProfileModal/CompleteProfileModal";
import FilterPills from "../../components/FilterPills/FilterPills";

const Home = () => {
  const [expandedProfileId, setExpandedProfileId] = useState(null);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState();
  const [profile, setProfile] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const [option, setOption] = useState("");

  const handleProfile = (profile) => {
    setProfileOpen(true);
    setProfile(profile);
    // console.log(profile);
  };

  const handleCardClick = (id) => {
    setExpandedProfileId((prevId) => (prevId === id ? null : id));
  };

  const performSearch = (query) => {
    const filtered = profiles.filter((profile) => {
      const nameMatch = profile.name.toLowerCase().includes(query.toLowerCase());
      const locationMatch = profile.address.toLowerCase().includes(query.toLowerCase());
      return nameMatch || locationMatch;
    });
    setFilteredProfiles(filtered);
  };

  const debounceSearch = (event, debounceTimeout) => {
    clearTimeout(debounceTimeout);
    const newTimeout = setTimeout(() => {
      performSearch(event.target.value);
    }, 500);
    return newTimeout;
  };

  const inputChangeHandler = (event) => {
    const timeout = debounceSearch(event, debounceTimeout);
    setDebounceTimeout(timeout);
  };

  const handleFilters = (e) => {
    const selectedOption = e.target.value; // Get selected option
    setOption(selectedOption); // Update the state with the selected option
  
    console.log("Selected Option:", selectedOption); // Debug log
    
    const filtered = profiles.filter((profile) => {
      console.log("Checking profile gender:", profile.gender); // Debug log
      return profile.gender.toLowerCase() === selectedOption.toLowerCase();
    });
  
    console.log("Filtered Profiles:", filtered); // Debug log
    
    setFilteredProfiles(filtered); // Update the filtered profiles state
  };
  

  const removeFilter = () => {
    setOption(""); // Clear selected option
    setFilteredProfiles(profiles); // Reset to all profiles
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Profile Viewer</h1>
      <div className={styles.searchFilters}>
        <input
          type="text"
          name="search"
          id="search-input"
          placeholder="Search by Name/Location"
          onChange={inputChangeHandler}
        />
        <select value={option} name="filter" id="filter" onChange={handleFilters}>
          <option value="" disabled>
            Apply Filter
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      {option && <FilterPills option={option} onRemove={removeFilter} />}
      <div className={styles.card}>
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            expandedProfileId={expandedProfileId}
            onCardClick={handleCardClick}
            handleProfile={() => handleProfile(profile)}
          />
        ))}
      </div>
      <CompleteProfileModal
        profile={profile}
        isOpen={isProfileOpen}
        onClose={() => {
          setProfileOpen(false);
        }}
      />
    </div>
  );
};

export default Home;
