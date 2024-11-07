import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg';
import { FaRegWindowMinimize } from 'react-icons/fa';
import { FiMinimize2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from './redux/appSlice';

const SendMail = () => {
    const dispatch = useDispatch();
    const open = useSelector(store => store.appSlice.open)
    const [formData, setFormData] = useState({
        to: "",
        subject: "",
        message: ""

    })
    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <>
            <div className={`${open ? 'block' : 'hidden'} bg-white max-w-6xl shadow-2xl shadow-slate-900 rounded-sm `}>
                <div >
                    {/* first row */}
                    <div className='text-gray-700 flex justify-between px-4 py-3 items-center'>
                        <div className='text-sm font-semibold'>
                            New message
                        </div>
                        <div className='flex '>
                            <div className='cursor-pointer hover:bg-gray-300 hover:rounded-md p-2'><FaRegWindowMinimize size={"14px"} /></div>
                            <div className='cursor-pointer hover:bg-gray-300 hover:rounded-md p-2'><FiMinimize2 size={"14px"} /></div>
                            <div onClick={() => dispatch(setOpen(false))} className='cursor-pointer hover:bg-gray-300 hover:rounded-md p-2' ><CgClose size={"14px"} /></div>
                        </div>
                    </div>
                    {/* second row */}
                    <form onSubmit={submitHandler} className='flex flex-col gap-3 p-4'>
                        <div className='flex items-center gap-1 border-b border-gray-200 shadow-sm'>
                            <p> To  </p>
                            <input onChange={changeHandler} value={FormData.to} type="text" name="to" id="" placeholder='Recipients' className='flex-1 text-black bg-transparent font-sans text-sm p-2' />
                        </div>
                        <div className='flex gap-1 items-center border-b border-gray-200 shadow-sm'>
                            <h1>Subject :</h1>
                            <input onChange={changeHandler} value={formData.subject} type="text" name="subject" id="" placeholder='Subject' className='flex-1 text-black bg-transparent font-sans text-sm p-2' />
                        </div>

                        <textarea onChange={changeHandler} value={formData.message} placeholder='Message' name="message" id="" cols="30" rows="10" className='border-b border-gray-200 shadow-sm bg-transparent font-sans text-sm text-gray-600 p-2 font-extralight' />


                        <div className='flex justify-start '>
                            <button onClick={()=> dispatch(setOpen(false))} className='gap-3 p-2 text-gray-600 bg-blue-300 rounded-lg hover:bg-blue-500 '>Send</button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}

export default SendMail
