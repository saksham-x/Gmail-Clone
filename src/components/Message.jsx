import React from 'react'
import { MdCropSquare, MdLabelImportant, MdStarOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Message = () => {

    // open mail 
    const navigate = useNavigate();
    const openMail = () => {
        navigate('/mail/123123123')

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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis neque fuga, nulla suscipit atque.</p>
                </div>
                <div className="flex-none text-gray-600 ml-5">
                    Time here
                </div>
            </div>



        </>
    )
}

export default Message
