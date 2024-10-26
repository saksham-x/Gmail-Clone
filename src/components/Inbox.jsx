import React, { useState } from 'react'
import { FiAlertOctagon, FiTag } from 'react-icons/fi'
import { IoMdArrowDropdown, IoMdMore, IoMdRefresh, IoMdSquareOutline } from 'react-icons/io'
import { LuUsers2 } from 'react-icons/lu'
import { MdOutlineInbox } from 'react-icons/md'
import Messages from './Messages'

const mailType = [
    {
        name: "Primary",
        icon: <MdOutlineInbox size={"20px"} />
    },
    {
        name: "Promotional",
        icon: <FiTag size={"20px"} />
    },
    {
        name: "Social",
        icon: <LuUsers2 size={"20px"} />
    },
    {
        name: "Updates",
        icon: <FiAlertOctagon size={"20px"} />
    }

]

const Inbox = () => {
    const [mailTypeSelected, setmailTypeSelected] = useState(0)
    return (
        <>

            <div className=' mx-6 bg-white shadow-lg shadow-blue-900/100 rounded-lg '>
                {/* 4 icons of homepage  */}

                <div className='flex px-4'>
                    <div className='flex items-center'>
                        <div className='p-2 hover:bg-gray-300 hover:rounded-sm cursor-pointer'>
                            <IoMdSquareOutline size={"20px"} />
                        </div>
                        <div className='p-2 hover:bg-gray-300 hover:rounded-sm cursor-pointer'>
                            <IoMdArrowDropdown size={"20px"} />
                        </div>
                    </div>
                    <div className='flex items-center p-3'>
                        <div className='p-2 hover:bg-gray-200 hover:rounded-full cursor-pointer'>
                            <IoMdRefresh size={"20px"} />
                        </div>
                        <div className='p-2 hover:bg-gray-200 hover:rounded-full cursor-pointer' >
                            <IoMdMore size={"20px"} />
                        </div>
                    </div>
                </div>

                <div className='h-[90vh] overflow-y-auto bg-red-200'>
                    {/* mapping 3 mail types  */}
                    <div className='flex items-center gap-1 '>
                        {
                            mailType.map((item, index) => {
                                return (
                                    <button
                                        key={index}
                                        className={`${mailTypeSelected === index ? 'border-b-4  border-b-blue-600 text-blue-600' : 'border-b-4 border-b-transparent'} flex m-1 p-4 w-52 items-center gap-4 bg-slate-100 hover:rounded-lg hover:shadow-md hover:bg-gray-300`}
                                        onClick={() => setmailTypeSelected(index)}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </button>
                                )
                            }
                            )
                        }
                    </div>
                    {/* message list */}
                    <Messages />
                </div>



            </div>

        </>
    )
}

export default Inbox
