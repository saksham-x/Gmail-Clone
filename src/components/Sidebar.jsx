import React, { useState } from 'react'
import { AiOutlineInbox, AiOutlineSend } from 'react-icons/ai'
import { HiOutlineClock, HiOutlineStar } from 'react-icons/hi2'
import { IoPencil } from 'react-icons/io5'
import { MdKeyboardArrowDown, MdOutlineDrafts } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setOpen } from './redux/appSlice'


//for sidebar items 
const sidebarItems = [
  {
    icon: <AiOutlineInbox size={"24px"} />,
    text: "Inbox"
  },
  {
    icon: <HiOutlineStar size={"24px"} />,
    text: "Stared"
  },
  {
    icon: <HiOutlineClock size={"24px"} />,
    text: "Snoozed"
  },
  {
    icon: <AiOutlineSend size={"24px"} />,
    text: "Sent"
  },
  {
    icon: <MdOutlineDrafts size={"24px"} />,
    text: "Draft"
  },
  {
    icon: <MdKeyboardArrowDown size={"24px"} />,
    text: "More"
  }

]

const Sidebar = () => {
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className='w-[15%] bg-gray-100'>

      {/* compose button  */}

      <div className='p-3'>
        <button onClick={() => dispatch(setOpen(true))} className='flex items-center gap-2  p-4 text-gray-500 bg-[#c2e7ff] rounded-xl hover:shadow-2xl hover:bg-blue-200 hover:text-slate-950'>
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
