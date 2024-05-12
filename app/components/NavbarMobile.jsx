'use client'
import { useState} from 'react'
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

export default function NavbarMobile () {

  const [menuIcon, setIcon] = useState(false);
  const handleSmallerScreensNavigation = () => { setIcon(!menuIcon) };
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBg);

  return (
    <>
      <header className={navbar ? 'navbar active' : 'active'}>
        <nav className='max-w-[1720px] z-10 max-auto h-[60px] md:h-[80px] flex justify-between items-center py-2 md:py-8 px-5 md:px-24'>
          <div>
            <Link href='/' onClick={handleSmallerScreensNavigation}>
              <span className='text-[16px] md:text-1xl md:opacity-70 ease-in-out duration-300 hover:opacity-100'>Craig Parfitt UI/UX Designer</span>
            </Link>
          </div>

          {/* larger screens navigation */ }
          <ul className='hidden md:flex'>
            <li className='navLink md:text-1xl pr-6'>
              <Link href='/'>
                Home
              </Link>
            </li>
            <li className='navLink md:text-1xl pr-6'>
              <Link href='/about'>
                About
              </Link>
            </li>
            <li className='navLink md:text-1xl pr-6'>
              <Link href="/projects/${slug}">
                Projects
              </Link>
            </li>
            <li className='navLink md:text-1xl'>
              <Link href="mailto:craig@craigparfitt.com"
                target="_blank"
                rel="noopener noreferrer">
                Contact
              </Link>
            </li>
          </ul>

          {/* smaller screens */ }
          <div onClick={ handleSmallerScreensNavigation } className='flex md:hidden'>
            { menuIcon ?
              ( <AiOutlineClose size={ 25 } className='text-white' /> )
              :
              ( <AiOutlineMenu size={25} className='text-white' /> )
          }
          </div>

          {/* Smaller screen Navbar */ }
          <div className={ menuIcon ?
            'md:hidden absolute top-[40px] right-0 left-0 flex justify-center items-center w-full h-screen bg-slate-950 text-white ease-in-out duration-300'
            :
            'md:hidden absolute top-[40px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-950 text-white text-center ease-in-out duration-300'
          }>
            <div className='w-full'>

              <ul className='text-2xl'>
                <li onClick={ handleSmallerScreensNavigation } className='py-10 font-bold text-2xl text-center hover:text-white cursor-pointer'>
                  <Link href='/'>
                    Home
                  </Link>
                </li>
                <li onClick={ handleSmallerScreensNavigation } className='py-10 font-bold text-2xl text-center hover:text-white cursor-pointer'>
                  <Link href="/projects/${slug}">
                    Portfolio
                  </Link>
                </li>
                <li onClick={ handleSmallerScreensNavigation } className='py-10 font-bold text-2xl text-center hover:text-white cursor-pointer'>
                  <Link href='/about'>
                    About
                  </Link>
                </li>
                <li onClick={ handleSmallerScreensNavigation } className='py-10 font-bold text-2xl text-center  hover:text-white cursor-pointer'>
                  <Link href="mailto:craig@craigparfitt.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Contact
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
