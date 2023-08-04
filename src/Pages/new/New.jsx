import './new.scss'

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Navbar from '../../components/navbar/Navbar'
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const New = () => {
  return (
    <div className='new'>
      <Sidebar/>
      <div className='newContainer'>

        <Navbar/>
        <div className='top'>
          <h1>add new user</h1>
        </div>
        <div className='bottom'>
          <div className='left'> 
          
          <img
              src={"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=''/>
          </div>
          <div className='right'> 
          <form>
<div className='formInput'>
  <label htmlFor='file'>
   Image: <DriveFolderUploadOutlinedIcon className='icon'/>
  </label>
  <input type='file' id='file' style={{display:"none"}}/>
  </div>


  <div className='formInput'>
  <label> Email</label>
  <input type='email' placeholder='emeka@gmail.com'/>
  </div>

  <div className='formInput'>
  <label> Phone</label>
  <input type='text' placeholder='Emeka John'/>
  </div>
  <div className='formInput'>
  <label> Password</label>
  <input type='text' placeholder='******'/>
  </div>  
  <div className='formInput'>
  <label> Aderess</label>
  <input type='text' placeholder='Lagos'/>
  </div>

         
  <div className='formInput'>
  <label> Country</label>
  <input type='text' placeholder='Nigeria'/>
  </div>
         
 <button>Send</button>
         
            
          </form>
          </div>
        </div>
      </div>
      </div>
  )
}

export default New
