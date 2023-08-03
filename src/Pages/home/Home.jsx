import  './Home.scss'

import Chart from '../../charts/Chart'
import Featured from '../../featured/Featured'
import List from '../../components/table/Table'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import Widget from '../../widget/Widget'

const Home = () => {
  return (
    <div className='home'>
   
    <Sidebar/>
    <div className='homeContainer'>
      <Navbar/>
       <div className='widgets'>
<Widget type="user"/>
<Widget type="order"/>
<Widget type="earnings"/>
<Widget type="balance"/>

        
       </div>
       <div className="charts">
<Featured/>
<Chart/>

       </div>
       <div className='listContainer'>
        <div className='listTitle'> Latest transactions</div>
        <Table/>
        
       </div>
    </div>
    </div>
  )
}

export default Home