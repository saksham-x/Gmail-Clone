import React from 'react'
import { BsInbox } from 'react-icons/bs'
import { FiTag } from 'react-icons/fi'
import { IoMdArrowDropdown, IoMdMore, IoMdRefresh, IoMdSquareOutline } from 'react-icons/io'
import { IoPhonePortrait } from 'react-icons/io5'
import { LuUser2 } from 'react-icons/lu'
import { MdOutlineInbox } from 'react-icons/md'

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
        icon: <LuUser2 size={"20px"} />
    },

]

const Inbox = () => {
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
                    <div className='flex items-center gap-1 '>
                        {
                            mailType.map((item, index) => {
                                return (
                                    <button
                                        key={index}
                                        className='flex p-4 w-52 items-center'>
                                        {item.icon}
                                        {item.name}
                                    </button>
                                )
                            }
                            )
                        }
                    </div>

                </div>

            </div>

        </>
    )
}

export default Inbox
