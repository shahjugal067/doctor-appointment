import React from 'react'
import logo1 from '../assets/logo1.avif'
import { Link, NavLink } from 'react-router-dom'
import userIcon from '../assets/as.webp'
import {LogIn} from 'lucide-react'


const navLink = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: '/doctors',
        display: 'Find Doctors'
    },
    {
        path: '/services',
        display: 'Services'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
]
const Header = () => {
  return (
    <div className='constainer px-20'>
        <div className='flex items-center justify-between bg-black/50 '>
            <div>
                <img src={logo1} alt="logo" width={50} height={50} />
            </div>

            {/* menu  */}
            <div className='navigation'>
                <ul className='menu flex items-center gap-4'>
                    {
                        navLink.map((link,index)=>(
                        <li key={index}>
                            <NavLink to={link.path} className={navClass=> navClass.isActive 
                                ? 'text-blue-500 text-[16px] leading-7'
                                :'text-orange-400 text-[16px] leading-7'} >
                                {link.display}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex items-center gap-4'>
                <div>
                    <Link to='/'>
                    
                        <img src={userIcon} alt="" className='w-[35px] h-[35px] rounded-full' />
                    
                    </Link>
                </div>
                <Link to='/login'>
                <button className='flex text-center items-center mr-4 bg-green-500 hover:bg-green-600 rounded-lg px-2 py-2'>
                    <LogIn className='w-4 h-4 mr-2 text-yellow-400'/>
                    <span className='text-yellow-400'>Login</span>
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header