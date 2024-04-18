import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Navbar from './Navbar'

function App() {

  return (
    <div className='container mx-auto '>
      <Navbar></Navbar>
      <h1 className='text-5xl font-bold text-center mx-auto'>Introduction firebase</h1>
      <Header></Header>
      <Outlet></Outlet>

    </div>
  )
}

export default App
