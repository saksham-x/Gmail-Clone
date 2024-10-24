import React from 'react'
import { CgNotes } from 'react-icons/cg'
import { IoMdClock, IoMdStar } from 'react-icons/io'
import { IoPencil, IoSend } from 'react-icons/io5'


//for sidebar items 
const sidebarItems = [
  {
    icon: <IoPencil size={"24px"} />,
    text: "Inbox"
  },
  {
    icon: <IoMdStar size={"24px"} />,
    text: "Stared"
  },
  {
    icon: <IoMdClock size={"24px"} />,
    text: "Snoozed"
  },
  {
    icon: <IoSend size={"24px"} />,
    text: "Sent"
  },
  {
    icon: <CgNotes size={"24px"} />,
    text: "Draft"
  }

]

const Sidebar = () => {
  return (
    <div className='w-[20%] bg-red-300'>

      {/* compose button  */}

      <div className='p-3'>
        <button className='flex items-center gap-2  p-4 bg-[#c2e7ff] rounded-xl hover:shadow-2xl'>
          <IoPencil size={"24px"} />
          Compose
        </button>
      </div>

      {/* sidebar items */}

      <div className='text-gray-600 font-sans font-semibold'>
        {
          sidebarItems.map((item, index) => {
            return (
              <div className='flex items-center justify-between hover:bg-slate-300 rounded-r-full px-6 py-1'>
                <div className='flex items-center gap-6 ml-5'>
                  {item.icon}
                  <p>{item.text} </p>
                </div>
              </div>
            )
          })
        }

      </div>

    </div>


  )
}

export default Sidebar
