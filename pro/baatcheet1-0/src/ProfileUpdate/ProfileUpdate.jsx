import React, { useState } from 'react'
import './ProfileUpdate.css'
import assets from '../assets/assets'
const ProfileUpdate = () => {
  const [image,setImage]=useState(false)
  return (
    <div className='profile'>
      <div className="prfile-container">
        <form >
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='avatar' accept='.png, .jpg .jpeg'hidden />
              <img src={image ? URL.createObjectURL(image): assets.avatar_icon} alt="" />
              Upload Profile image            

          </label>
          <input type='text' placeholder='Your name' requied/>
          <textarea placeholder='write porfile bo'></textarea>
          <button type='submit'>Save</button>
          
        </form>
        <img className='profile-pic' src={ image? URL.createObjectURL(image): assets.avatar_icon} alt="" />
      </div>

      
    </div>
  )
}

export default ProfileUpdate
