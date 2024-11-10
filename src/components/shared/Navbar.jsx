import React, { useEffect, useState } from 'react'
import { IoIosSearch } from 'react-icons/io';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import { IoMdOptions } from "react-icons/io";
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { setSearchtext, setUser } from '../redux/appSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Navbar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(false);

    const signOutHandler = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null))
        })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        dispatch(setSearchtext(input))

    }, [input])

    return (
        <>
            <div className='flex items-center mx-3 h-16 hover:bg-blue-200 justify-between'>

                {/* logo */}
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <RxHamburgerMenu size={"20px"} />
                    </div>
                    <img className='w-8 h-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThD6A938X2F3kMW50WVmJZtngHfx8eBXFL-w&s" alt="gmail-logo" />
                    <h1 className='text-2xl font-medium text-gray-500'>Gmail</h1>
                </div>

                {/* search bar */}
                <div className='md:block hidden w-[50%] mr-60'>
                    <div className='flex items-center gap-2.5 bg-slate-300 rounded-full p-2 justify-between'>
                        <div className='flex items-center ml-3'>
                            <IoIosSearch size={"20px"} className='text-gray-700' />
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                type="text" name="Search" id="Search" placeholder='Search Mail'
                                className='w-full bg-transparent outline-none px-1 bg-slate-100 h-8 rounded-sm text-black' />
                        </div>
                        <div className='mr-3 cursor-pointer'>
                            <IoMdOptions size={"20px"} className='text-gray-700' />
                        </div>
                    </div>

                </div>
                {/* profile */}
                <div className='md:block hidden'>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full p-3 hover:bg-slate-300 cursor-pointer'>
                            <CiCircleQuestion size={"28px"} />
                        </div>
                        <div className='rounded-full p-3 hover:bg-slate-300 cursor-pointer'>
                            <CiSettings size={"28px"} />
                        </div>
                        <div className='rounded-full p-3 hover:bg-slate-300 cursor-pointer'>
                            <TbGridDots size={"28px"} />
                        </div>
                        <div className="cursor-pointer">

                            <Avatar onClick={() => setToggle(!toggle)} src={setUser?.photoURL} googleId="118096717852922241760" size="40" round={true} />
                            {/* signout  */}
                            {
                                toggle && (
                                    <div className='absolute top-16 right-10 bg-white shadow-lg p-2 rounded-md'>
                                        <div className='flex items-center gap-2'>
                                            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuRpU7VwkPrebyZRlkL6nPodiMJssWuGQvjk5WCdudkqN2izbSuggG_Tc4gmXUP7SqgU&usqp=CAU' round={true} size={40} />
                                            <div>
                                                <h1 className='font-semibold'>Rahul</h1>
                                                <h1 className='text-gray-500'>zYH0A@example.com</h1>
                                            </div>
                                        </div>

                                        <div onClick={signOutHandler} className='mt-3 hover:bg-gray-200 hover:rounded-md p-3 cursor-pointer'>
                                            Logout
                                        </div>
                                    </div>
                                )
                            }
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
