import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Shared/Navbar/Navbar'
import Footer from './components/Shared/Footer/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='w-[90%] mx-auto'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
