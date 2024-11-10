import React from 'react'
import { BsTrash } from 'react-icons/bs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { GoReply } from 'react-icons/go';
import { IoMdArrowBack, IoMdMore } from 'react-icons/io'
import { IoStarOutline } from 'react-icons/io5';
import { MdArrowDropDown, MdMarkAsUnread, MdMore, MdOutlineArchive, MdOutlineDriveFileMove, MdOutlineReply, MdOutlineStar } from "react-icons/md";
import { RiSpamLine } from 'react-icons/ri';
import { TfiNewWindow } from "react-icons/tfi";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';


const Mail = () => {
    const navigate = useNavigate();
    const selectedMail = useSelector(store => store.appSlice.selectedMail)
    const params = useParams();

    const deleteMailById = async (id) => {
        try {
            await deleteDoc(doc(db, "emails", id))
            navigate("/")

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='flex-1 bg-white rounded-xl mx-6 shadow-lg'>


            {/* icons on mail top bar */}
            <div className='flex items-center justify-between px-4'>

                <div className='flex items-center gap-3'>
                    <div onClick={() => navigate("/")} className='hover:bg-gray-200 hover:rounded-md p-3'>
                        <IoMdArrowBack size={"20px"} />
                    </div>
                    <div className='hover:bg-gray-200 hover:rounded-md p-3'>
                        <MdOutlineArchive size={"20px"} />
                    </div>
                    <div className='hover:bg-gray-200 hover:rounded-md p-3'>
                        <RiSpamLine size={"20px"} />
                    </div>

                    <div onClick={() => deleteMailById(params.id)} className='hover:bg-gray-200 hover:rounded-md p-3 hover:text-red-500'>
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
            {/* 2nd navbar  */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3 px-4 ml-8 my-3'>
                    <h1 className='text-xl text-black font-medium'>{selectedMail?.subject}</h1>
                    <p className='text-gray-500 bg-gray-300 px-1 rounded font-extralight text-xs'> Inbox </p>
                </div>
                <div className='mr-5'>
                    <div className='cursor-pointer p-2 hover:bg-gray-200 hover:rounded-md '>
                        <TfiNewWindow size={"20px"} />
                    </div>
                </div>
            </div>
            {/* third navbar  */}
            <div className='flex px-4 justify-between'>
                <div className='  p-2 gap-3 text-gray-600'>

                    <div className='flex items-center'>
                        <h1 className='cursor-pointer'>Name</h1> &nbsp;
                        <p className='text-xs'> {"<"}{selectedMail?.to}{">"} </p>

                        <button className='text-xs text-blue-400 hover:bg-gray-300 hover:rounded-md p-1 hover:text-blue-700'>unsubscribe</button>
                    </div>
                    <div className='flex items-center text-xs'>
                        {selectedMail?.from}  <MdArrowDropDown size={"20px"} />
                    </div>
                </div>

                {/* right side icons  */}
                <div className='flex items-center gap-2 text-gray-600 text-xs'>
                    <div className='p-1 cursor-pointer rounded-md hover:bg-gray-200'>
                        {new Date(selectedMail?.createdAt?.seconds * 1000).toUTCString()}
                    </div>
                    <div className='p-1  cursor-pointerrounded-md hover:bg-gray-200'>
                        <IoStarOutline />
                    </div>
                    <div className='p-1 cursor-pointer rounded-md hover:bg-gray-200'>
                        <GoReply />
                    </div>
                    <div className='p-1 cursor-pointer rounded-md hover:bg-gray-200'>
                        <IoMdMore />
                    </div>
                </div>
            </div>
            {/* Message  */}
            <p>

                <div className='py-10 mx-6 text-gray-700'>
                    {selectedMail?.message}
                </div>
            </p>
        </div>
    )
}

export default Mail
