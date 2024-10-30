import React from 'react'
import { BsTrash } from 'react-icons/bs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { IoMdArrowBack, IoMdMore } from 'react-icons/io'
import { MdMarkAsUnread, MdOutlineArchive, MdOutlineDriveFileMove } from "react-icons/md";
import { RiSpamLine } from 'react-icons/ri';

const Mail = () => {
    return (
        <div className='flex-1 bg-white rounded-xl mx-5 shadow-lg'>


            {/* icons on mail top bar */}
            <div className='flex items-center justify-between px-4'>

                <div className='flex items-center gap-3'>
                    <div className='hover:bg-gray-200 hover:rounded-md p-3'>
                        <IoMdArrowBack size={"20px"} />
                    </div>
                    <div className='hover:bg-gray-200 hover:rounded-md p-3'>
                        <MdOutlineArchive size={"20px"} />
                    </div>
                    <div className='hover:bg-gray-200 hover:rounded-md p-3'>
                        <RiSpamLine size={"20px"} />
                    </div>

                    <div className='hover:bg-gray-200 hover:rounded-md p-3'>
                        <BsTrash size={"20px"} />
                    </div>
                    <div className='hover:bg-gray-200 hover:rounded-md p-3'>
                        <MdMarkAsUnread size={"20px"} />
                    </div>
                    <div>
                        <MdOutlineDriveFileMove size={"20px"} />
                    </div>
                    <div className='hover:bg-gray-200 hover:rounded-md p-3'>
                        <IoMdMore size={"20px"} />
                    </div>
                </div>
                <div className='flex '>
                    <div className='p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer'> <FaChevronLeft size={"20px"} /></div>
                    <div className='p-2 hover:bg-gray-200 hover:rounded-md cursor-pointer'> <FaChevronRight size={"20px"} /></div>
                </div>
            </div>
            <div className='flex items-center gap-3 px-4'>
                <strong>Supercharge your job search!</strong> <p className='text-gray-500 bg-gray-400'> Inbox </p>
            </div>
        </div>
    )
}

export default Mail
