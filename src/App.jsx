import './App.css'
import Navbar from './components/shared/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div className='bg-[#f6f8fc] h-screen w-screen overflow-hidden'>
        <Navbar />
        <Sidebar />
      </div>
    </>

  )
}

export default App
