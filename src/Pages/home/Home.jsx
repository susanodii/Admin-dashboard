import  './Home.scss'

import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='home'>
   
    <Sidebar/>
    <div className='homeContainer'>
      <Navbar/>
       home container
    </div>
    </div>
  )
}

export default Home