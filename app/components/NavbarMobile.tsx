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
        <nav className='z-10 max-auto h-[60px] md:h-[80px] flex justify-between items-center py-2 md:py-8 px-5 md:px-10 lg:px-24'>
          <div>
            <Link href='/' onClick={handleSmallerScreensNavigation}>
              <span className='text-[16px] z-10 md:text-1xl md:opacity-70 ease-in-out duration-300 hover:opacity-100'>Craig Parfitt UX / UI Designer</span>
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
              <Link href="/projects/${post.slug.current}">
                Projects
              </Link>
            </li>
            <li className='navLink md:text-1xl'>
              <a href="mailto:info@craigparfitt.com"
                target="_blank"
                rel="noopener noreferrer">
                Contact
              </a>
            </li>
          </ul>

          {/* smaller screens */ }
          <div onClick={ handleSmallerScreensNavigation } className='flex md:hidden text-black'>
            { menuIcon ?
              ( <AiOutlineClose size={25} /> )
              :
              ( <AiOutlineMenu size={25}  /> )
          }
          </div>

          {/* Smaller screen Navbar */ }
          <div className={ menuIcon ?
            'md:hidden z-50 absolute top-[60px] right-0 left-0 flex justify-center items-center w-full h-screen bg-slate-950 text-white ease-in-out duration-300'
            :
            'md:hidden z-50 absolute top-[60px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-950 text-white text-center ease-in-out duration-300'
          }>
            <div className='w-full'>

              <ul className='text-2xl -mt-20'>
                <li onClick={ handleSmallerScreensNavigation } className='py-10 font-bold text-2xl text-center hover:text-white cursor-pointer'>
                  <Link href='/'>
                    Home
                  </Link>
                </li>
                <li onClick={ handleSmallerScreensNavigation } className='py-10 font-bold text-2xl text-center hover:text-white cursor-pointer'>
                  <Link href="/projects/${slug}">
                    Projects
                  </Link>
                </li>
                <li onClick={ handleSmallerScreensNavigation } className='py-10 font-bold text-2xl text-center hover:text-white cursor-pointer'>
                  <Link href='/about'>
                    About
                  </Link>
                </li>
                <li onClick={ handleSmallerScreensNavigation } className='py-10 font-bold text-2xl text-center  hover:text-white cursor-pointer'>
                  <a href="mailto:craig@craigparfitt.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Contact
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
