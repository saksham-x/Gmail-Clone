import React from 'react'
import { MdCropSquare, MdLabelImportant, MdStarOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Message = ({ email }) => {

    // open mail 
    const navigate = useNavigate();
    const openMail = () => {
        navigate(`/mail/${email.id}`)

    }
    return (
        <>
            <div onClick={openMail} className='flex px-4 py-2 items-start justify-between border-b hover:drop-shadow-md '>

                <div className='flex items-center  gap-3'>
                    <div className='flex-none text-gray-600 cursor-pointer'>
                        <MdCropSquare size={"20px"} />
                    </div>
                    <div className='flex-none text-gray-600 cursor-pointer'>
                        <MdStarOutline size={"20px"} />
                    </div>
                    <div className='flex-none cursor-pointer'>
                        <MdLabelImportant size={"20px"} className='text-yellow-500' />
                    </div>

                </div>
                <div className='flex-1 ml-5 truncate text-gray-600 inline-block max-w-full cursor-pointer'>
                    <p>{email?.message}</p>
                </div>
                <div className="flex-none text-gray-600 ml-5">
                    <p>
                        {new Date(email?.createdAt?.seconds * 1000).toUTCString()}
                    </p>
                </div>
            </div>



        </>
    )
}

export default Message
