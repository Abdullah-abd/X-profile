import React, { useEffect, useState } from "react";
import AdminProfileCard from "../../components/AdminProfileCard/AdminProfileCard";
import styles from "./Admin.module.css";
import data from "../../profiles";
import AddProfileModal from "../../components/AddProfileModal/AddProfileModal";
import EditProfileModal from "../../components/EditProfileData/EditProfileModal";

const Admin = () => {
  const [profiles, setProfiles] = useState([]);
  const [isModalOpen,setIsModalOpen]=useState(false)
  const [isEditOpen,setEditOpen]=useState(false)
  const [editData,setDataEdit]=useState({})
  const [debounceTimeout,setDebounceTimeout] = useState();
useEffect(()=>{
    setProfiles(data)
},[])

  const handleEdit = (profile) => {
    setEditOpen(true);
    setDataEdit(profile);
  };

  const handleDelete = (id) => {
   const updatedProfiles = profiles.filter((p) => p.id !== id);
   setProfiles(updatedProfiles);

  };
  const performSearch = (query) => {
    // setSearchQuery(query);
    const filtered = profiles.filter((profile) => {
        const nameMatch = profile.name.toLowerCase().includes(query.toLowerCase());
        const locationMatch = profile.address.toLowerCase().includes(query.toLowerCase());
        return nameMatch || locationMatch; 
      });
    setProfiles(filtered);
  };
  const debounceSearch = (event, debounceTimeout) => {
    clearTimeout(debounceTimeout);
    const newTimeOut = setTimeout(() => {
      performSearch(event.target.value);
    }, 500);
    return newTimeOut;
  };
  const inputChangeHandler = (event) => {
    const timeOut = debounceSearch(event, debounceTimeout);
    setDebounceTimeout(timeOut);
  };
  return (
    <div className={styles.adminPortal}>
      <h2>Admin Portal</h2>
      <div className={styles.addProfile}> 
        <input
        type="text"
        name="search"
        id="search-input"
        placeholder="Search by Name/Location"
        onChange={inputChangeHandler}
      />
        <button className={styles.addButton} onClick={()=>{setIsModalOpen(true)}}> Add New Profile
        </button>
        </div>
      
      <div className={styles.profileList}>
        {profiles.map((profile) => (
          <AdminProfileCard
            key={profile.id}
            profile={profile}
            onEdit={() => handleEdit(profile)}
            onDelete={handleDelete}
          />
        ))}
      </div>
        
      <EditProfileModal 
        isOpen={isEditOpen}
        onClose={() => setEditOpen(false)}
        profile={editData}
      />
      < AddProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
       
      />
    </div>
  );
};

export default Admin;
