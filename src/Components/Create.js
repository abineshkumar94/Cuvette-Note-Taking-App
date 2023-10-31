import React, { useState } from 'react';
import "./Create.css";

const Create = ({ updateProfileInfo }) => {
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [initials, setInitials] = useState('');

  const handleCreateClick = (e) => {
    e.preventDefault();
    localStorage.setItem('groupName', groupName);
    localStorage.setItem('selectedColor', selectedColor);

    const initials = groupName.slice(0, 2).toUpperCase();
    setInitials(initials);
    localStorage.setItem('initials', initials);

    updateProfileInfo(groupName, selectedColor, initials); // Pass initials to Page1
  };

  return (
    <div>
      <div className='create-container'>
        <h1 className='create-text1'>Create New Notes group</h1>
        <h1 className='create-group'>Group Name</h1>
        <form>
          <input
            className='form'
            type='text'
            placeholder='Enter your group name....'
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          ></input>
        </form>
        <h1 className='create-colour'>Choose colour</h1>
        <button className='clr-btn1' onClick={() => setSelectedColor('#b38bfa')}></button>
        <button className='clr-btn2' onClick={() => setSelectedColor('#ff79f2')}></button>
        <button className='clr-btn3' onClick={() => setSelectedColor('#43e6fc')}></button>
        <button className='clr-btn4' onClick={() => setSelectedColor('#f19576')}></button>
        <button className='clr-btn5' onClick={() => setSelectedColor('#0047ff')}></button>
        <button className='clr-btn6' onClick={() => setSelectedColor('#6691ff')}></button>
        <button className='create-btn' onClick={handleCreateClick}>Create</button>
      </div>
    </div>
  );
}

export default Create;
         
