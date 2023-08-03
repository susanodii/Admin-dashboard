import './single.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

import Chart from '../../charts/Chart'
import List from '../../components/table/Table'




import React from 'react'

const Single = () => {
  return (
    <div className='single'>

<Sidebar/>
<div className='singleContainer'>
<Navbar/>
<div className='top'>
<div className='left'>
  <div className='editbutton'>Edit</div>
<h1 className='title'> Information</h1>
<div className='item'> 
<img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className='details'>
                <h1 className='itemmTitle'>  Peace John</h1>
             <div className='detailItem'>
              <span className='itemKey'> Email:</span>
              <span className='itemValue'> emeka@gmail.com</span>

             </div>

             <div className='detailItem'>
              <span className='itemKey'> Phone:</span>
              <span className='itemValue'> +23470895467</span>

             </div>


             <div className='detailItem'>
              <span className='itemKey'> Address:</span>
              <span className='itemValue'> Banana Island</span>

             </div>

             <div className='detailItem'>
              <span className='itemKey'> Country:</span>
              <span className='itemValue'> Nigeria</span>

             </div>
              </div>
</div>
</div>
<div className='right'>

  <Chart aspect={3/1} title = "User Spending {Last 6 Month}"/>
</div>
</div>
<div className='bottoom'></div>
<h1 className='title'> Last Transactions</h1>
<List/>
</div>



    </div>
  )                     
}

export default Single