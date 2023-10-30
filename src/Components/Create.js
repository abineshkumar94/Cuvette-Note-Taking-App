import React from 'react';
import "./Create.css";

const Create = () => {
    const handleCreateClick = (e) => {
        e.preventDefault(); 
      };
    return (
    <div>
        <div onClick={handleCreateClick} className='create-container ' >
            <h1 className='create-text1 ' >Create New Notes group</h1>
            <h1 className='create-group ' >Group Name</h1>
            <form >
                <input
                className='form'
                type='text'
                placeholder='Enter your group name....'
                ></input>
            </form>
            <h1 className='create-colour' >Choose colour</h1>
            <button className='clr-btn1' ></button>
            <button className='clr-btn2' ></button>
            <button className='clr-btn3' ></button>
            <button className='clr-btn4' ></button>
            <button className='clr-btn5' ></button>
            <button className='clr-btn6' ></button>
            <button className='create-btn' >Create</button>
        </div>
    </div>
  )
}

export default Create  