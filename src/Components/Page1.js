import React, { useState, useEffect } from 'react';
import "./Page1.css";
import image from "../Pictures/img.png";
import Create from "../Components/Create";

const Page1 = () => {
  const [create, setCreate] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [initials, setInitials] = useState('');

  const openCreateComponent = () => {
    setCreate(true);
  };

  const closeCreateComponent = () => {
    setCreate(false);
  };

  const handlePageClick = (e) => {
    if (create) {
      const createContainer = document.querySelector('.create-container');
      if (createContainer && !createContainer.contains(e.target)) {
        closeCreateComponent();
      }
    }
  };

  const updateProfileInfo = (name, color, initials) => {
    setGroupName(name);
    setSelectedColor(color);
    setInitials(initials);
  };

  useEffect(() => {
    const storedName = localStorage.getItem('groupName');
    const storedColor = localStorage.getItem('selectedColor');
    const storedInitials = localStorage.getItem('initials');

    if (storedName && storedColor) {
      setGroupName(storedName);
      setSelectedColor(storedColor);
    }

    if (storedInitials) {
      setInitials(storedInitials);
    }
  }, []);

  return (
    <div onClick={handlePageClick}>
      <div className='background'>
        <img src={image} alt='' style={{ width: "250px", height: "120px" }} className='img1' />
        <span className='text1'>Pocket Notes</span>
        <span className='text2'>Send and receive messages without keeping your phone online.</span>
        <span className='text3'>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</span>
        <span className='text4'>end-to-end encrypted</span>
        <span className='text5'>Pocket Notes</span>
        <button className='btn' onClick={openCreateComponent}>+ Create Notes group</button>
        {create && <Create updateProfileInfo={updateProfileInfo} />}
        {initials && (
          <div className="profile-info">
            <div className="profile-color" style={{ background: selectedColor }}>
              <span className='initials' > {initials} </span>
            </div>
            <div className="profile-name">{groupName}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page1;



