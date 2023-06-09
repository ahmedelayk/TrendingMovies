import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {

  return (<>
    <Navbar/>
    <div className='bg-back p-2'>
      <Outlet/>
    </div>
    <Footer/>
  </>
  )
}
