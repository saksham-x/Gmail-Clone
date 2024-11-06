import React from 'react'
import { BiFullscreen } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { CiMinimize1, CiMinimize2 } from 'react-icons/ci';
import { FaRegWindowMinimize } from 'react-icons/fa';
import { FiMinimize2 } from 'react-icons/fi';

const SendMail = () => {
    const open = true;
    return (
        <>
            <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-slate-900 rounded-sm `}>
                <div >
                    {/* first row */}
                    <div className='text-gray-700 flex justify-between px-4 py-3 items-center'>
                        <div className='text-sm font-semibold'>
                            New message
                        </div>
                        <div className='flex '>
                            <div className='cursor-pointer hover:bg-gray-300 hover:rounded-md p-2'><FaRegWindowMinimize size={"14px"} /></div>
                            <div className='cursor-pointer hover:bg-gray-300 hover:rounded-md p-2'><FiMinimize2 size={"14px"} /></div>
                            <div className='cursor-pointer hover:bg-gray-300 hover:rounded-md p-2'><CgClose size={"14px"} /></div>
                        </div>
                    </div>

                    {/* second row */}
                    <form action="" className='flex flex-col gap-3 p-4'>
                        <div className='flex items-center gap-1 border-b border-gray-200 shadow-sm'>
                            <p> To  </p>  <input type="text" name="recipients" id="" className='flex-1 text-black bg-transparent  p-2' />

                        </div>
                        <div className='flex gap-1 items-center border-b border-gray-200 shadow-sm'>
                            <h1>Subject :</h1>
                            <input type="text" name="subject" id="" className='flex-1 text-black bg-transparent  p-2' />
                        </div>
                        <textarea name="message" id="" cols="30" rows="10" className='border-b border-gray-200 shadow-sm bg-transparent' >

                        </textarea>
                        <div className='flex justify-start '>
                            <button className='gap-3 p-2 text-gray-600 bg-blue-300 rounded-lg hover:bg-blue-500'>Send</button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}

export default SendMail
