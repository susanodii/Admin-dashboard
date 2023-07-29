import './widget.scss'

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Widget = ({type}) => {
  let data;
  
//   temporary
const amount = 100
const diff = 40
  switch(type){
  case "user":
data={
    title:"USERS",
   
isMoney:false,
link:"See all users",
icon: <PersonOutlinedIcon className="icon"
style={{backgroundColor:"rgba(255, 0, 0, 0.2)"}}/>
}
break;
case "order":
    data={
        title:"ORDERS",
       
    isMoney:false,
    link:"View orders",
    icon: <ShoppingCartOutlinedIcon className="icon" 
    style={{backgroundColor:"rgba(255, 0, 0, 0.)",
color:"goldenrod"}}/>

    }
break;

case "earnings":
    data={
        title:"EARNINGS",
       
    isMoney:true,
    link:"View net earnings",
    icon: <MonetizationOnOutlinedIcon className="icon"
    
    style={{backgroundColor:"rgba(255, 0, 0, 0.)",
color:"green"}}/>
    }
    break;

    case "balance":
    data={
        title:"BALANCE",
       
    isMoney:true,
    link:"See details",
    icon: <AccountBalanceWalletOutlinedIcon className="icon"
    style={{backgroundColor:"rgba(255, 0, 0, 0.)",
color:"purple"}}
    />
    }
break;
  default:
    break
}
  
    return (
    <div className='widget'>
<div className='left'>
    <span className='title'>{data.title}</span>
    <span className='counter'>{data.isMoney && "$"} {amount}</span>
    <span className='link'>{data.link}</span>
    </div>
<div className='right'>
    <div className='percentage positive'>
    <KeyboardArrowUpIcon/>    
    {diff}%
    </div>
    {data.icon}
</div>
        
    </div>
  )
}

export default Widget