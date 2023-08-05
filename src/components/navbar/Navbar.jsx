import './navbar.scss'

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import {DarkModeContext} from "../../context/darkModeContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from '@mui/icons-material/Search';
import suzy from '../../img/suzy.jpg'
import { useContext } from "react";

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='navbar'>
      
      <div className='wrapper'>
        <div className='search'>
           <input type="text" placeholder='Search.....'/>
           <SearchIcon/>
        </div>
        <div className='items'>
<div className='item'>
<LanguageOutlinedIcon className='icon'/>
English
  </div>

  <div className='item'>
<DarkModeIcon className='icon' onClick={()=> dispatch({type:"TOGGLE"})}/>

  </div>

  <div className='item'>
<FullscreenExitOutlinedIcon  className='icon'/>

  </div>

  <div className='item'>
<NotificationsNoneOutlinedIcon  className='icon'/>
<div className='counter'>1</div>
  </div>

  <div className='item'>
<ChatBubbleOutlineOutlinedIcon className='icon'/>
<div className='counter'>2</div>
  </div>

  <div className='item'>
<ListOutlinedIcon className='icon'/>

  </div>

  <div className='item'>
<img src={suzy} alt='' className='avarta'/>

  </div>
  
          
        </div>
      </div>
      </div>
  )
}

export default Navbar