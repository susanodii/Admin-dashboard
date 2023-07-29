import  './sidebar.scss'

import Dashboard from '@mui/icons-material/Dashboard';
import Face4Icon from '@mui/icons-material/Face4';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReorderIcon from '@mui/icons-material/Reorder';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

// import DashboardIcon from '@mui/icons-material/Dashboard';


const Sidebar = () => {
  return (
    <div className='sidebar'>

        <div className='top'> 
        <span className='logo'> SUZY</span>
        </div>
<hr/>
        <div className='center'>
             <ul>
                <p className='title'> Main</p>
                <li>
                    <Dashboard className='icon'/>
                     <span>Users</span>
                     </li>
                     <p className='title'> Users</p>
                <li>
               
                    <PersonOutlineIcon className='icon' />
                     <span>Orders</span>
                     </li>
                     
                <li>
                     <LocalShippingIcon  className='icon'/>
                     <span>Delivary</span>
                     
                     </li>
                     <p className='title'> Useful</p>
                <li>
                    <SignalCellularAltIcon className='icon'/>
                     <span>Stats</span></li>
                <li>
                    <NotificationsNoneIcon  className='icon'/>
                     <span>Notification</span></li>
                     <p className='title'> Products</p>
                <li>
                    <ReorderIcon  className='icon'/>
                     <span>Orders</span></li>
                <li>
                    <Face4Icon className='icon'/>
                     <span>Logs</span>
                     </li>
                     <p className='title'> Service</p>
                <li> 
                   <LocalHospitalIcon className='icon'/> 
                    <span>System Health
                        </span></li>
               
                <li> 
                    <SettingsInputComponentIcon className='icon'/>
                    <span>Settings</span>
                    </li>
                  
                    <p className='title'> USER</p>
              
                <li> 
                    <SettingsInputComponentIcon  className='icon'/>
                    <span>Profile</span>
                    </li>
                
                    <li>
                    <LogoutIcon className='icon'/>
                     <span>Log Out</span>
                     </li>
               
            </ul>
        </div>
 <div className='bottom'>
    
    <div className='colorOption'></div>
    <div  className='colorOption'></div>
   
     </div>
    </div>
  )
}

export default Sidebar