import React from 'react';
import "./Page1.css";
import image from "../Pictures/img.png"
const Page1 = () => {
  return (
    <div>
        <div className='background' >
            <img src={image}
             alt=''  
             style={{ width: "250px", height: "120px" }}
             className='img1'
             />
            <span className='text1' >Pocket Notes</span>
            <span className='text2' >Send and receive messages without keeping your phone online.</span>
            <span className='text3' >Use Pocket Notes on up to 4 linked devices and 1 mobile phone</span>
            <span className='text4' >end-to-end encrypted</span>
            <span className='text5' >Pocket Notes</span>
            <button className='btn' >+ Create Notes group</button>
        </div>
    </div>
  )
}

export default Page1