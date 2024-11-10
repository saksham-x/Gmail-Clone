import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Inbox from './components/Inbox'
import Navbar from './components/shared/Navbar'
import Body from './components/Body'
import Mail from './components/Mail'
import SendMail from './components/SendMail'
import Login from './components/Login'
import { useSelector } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Inbox />
      },
      {
        path: "/mail/:id",
        element: <Mail />
      }
    ]

  }
])
function App() {
  const { user } = useSelector(store => store.appSlice)
  return (
    <>
      <div className='bg-[#f6f8fc] h-screen w-full overflow-hidden'>
        {
          !user ? (
            <Login />
          ) : (
            <>

              <Navbar />
              <RouterProvider router={router} />
              <div className='absolute w-[30%] right-10 bottom-0 '>
                <SendMail />
              </div>
            </>
          )
        }
      </div>
    </>

  )
}

export default App
