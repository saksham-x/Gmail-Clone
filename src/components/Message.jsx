import React from 'react'
import { MdCropSquare, MdLabelImportant, MdStarOutline } from 'react-icons/md'

const Message = () => {
    return (
        <>
            <div className='flex px-4 py-2 items-start justify-between border-b hover:drop-shadow-md '>

                <div className='flex items-center  gap-3 bg-green-200'>
                    <div className='flex-none text-gray-600'>
                        <MdCropSquare size={"20px"} />
                    </div>
                    <div className='flex-none text-gray-600'>
                        <MdStarOutline size={"20px"} />
                    </div>
                    <div className='flex-none'>
                        <MdLabelImportant size={"20px"} className='text-yellow-500' />
                    </div>

                </div>
                <div className='flex-1 ml-5 truncate bg-green-100 text-gray-600 inline-block max-w-full'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis neque fuga, nulla suscipit atque.</p>
                </div>
                <div className="flex-none text-gray-600 bg-green-400">
                    Time here
                </div>
            </div>



        </>
    )
}

export default Message
