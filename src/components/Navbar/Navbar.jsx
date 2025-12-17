import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <header className='bg-white'>
            <nav className=' max-w-[1400px] mx-auto px-10 h-[14vh] flex justify-between items-center '>
                {/* Logo */}
                <a href="#" className='text-3xl font-bold'>
                    <span className='text-orange-500 uppercase'>N</span>ature<span className='text-orange-500 uppercase'>C</span>rate
                </a>

                {/* Desktop menu */}

                <ul className='flex items-center gap-x-15'>
                    <li>

                        <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
                    </li>
                    <li>

                        <a href="#" className='font-semibold  tracking-wider text-zinc-800 hover:text-orange-500'>About us</a>
                    </li>
                    <li>

                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                    </li>
                    <li>

                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                    </li>

                </ul>

                {/* Nav Search Action */}

                <div className='flex items-center gap-x-5'>

                    {/* INput field search */}
                       <div className='flex  p-1 border-2 border-orange-500 rounded-full'> 
                         <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' 
                         className='flex-1 h-[5vh] px-3 focus:outline-none' />
                         <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                            <CiSearch />
                         </button>
                       </div>

                    <a href="#" className='text-zinc-800 text-2xl'>
                        <IoIosHeartEmpty />

                    </a>
                    <a href="#" className='text-zinc-800 text-2xl'>
                        <IoCartOutline />

                    </a>
                </div>

            </nav>
        </header>
    )
}

export default Navbar
