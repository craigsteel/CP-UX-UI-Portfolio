'use client'

import Link from "next/link";
import React, { useEffect, useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

function Navbar() {

	const [nav, setNav] = useState(false);
	const [color, setColor] = useState('transparent');
	const [textColor, setTextColor] = useState('white');

		const handleNav = () => {
			setNav(!nav);
		};

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setColor('#010617')
				setTextColor('#ffffff')
			} else {
				setColor('transparent')
				setTextColor('#ffffff')
			}
		}
		window.addEventListener('scroll', changeColor);
	}, []);

	return (
		<nav style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in-out duration-300">
			<div className="max-w-[1240px] m-auto flex justify-between p-4 text-white">

				<ul style={{ color: `${textColor}` }} className="hidden sm:flex items-center ">
						<li className="p-4">
						<Link href="/">
						<p style={{color: `${textColor}`}} className='text-lg font-bold md:pl-4 opacity-70 space-x-4 hover:opacity-100 transition duration-300'>
								<span>Craig Parfitt UI/UX Designer</span> </p>
						</Link>
						</li>
						<li className="flex space-x-4 p-4 opacity-70 text-lg">
							<span>-</span><span>0786 656 2170</span>
						</li>

						<li className="p-4 opacity-70 text-lg hover:opacity-100 transition duration-300">
								<Link href="/about">About</Link>
							</li>
							<li className="p-4 opacity-70 text-lg hover:opacity-100 transition duration-300">
								<Link href="/projects/${slug}">Projects</Link>
							</li>
							<li className="p-4 opacity-70 text-lg hover:opacity-100 transition duration-300">
								<Link href="contact">Contact</Link>
							</li>
				</ul>


						{/* Mobile Button */}
						<div onClick={handleNav} className="w-full m-auto flex justify-between items-center pt-5 px-10 sm:hidden z-10">
							<div className="text-sm">
								Craig Parfitt UI/UX Designer
					</div>
					<div onClick={handleNav}>
							{nav ? <AiOutlineClose size={30} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={30} style={{color: `${textColor}`}} />}
						</div></div>

						{/* Mobile Menu */}
						<div className={
							nav
								? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
								: "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
								}
							>
						<ul>
							<li className="p-4 text-4xl hover:text-gray-500">
								<Link href="/">Home</Link>
							</li>
							<li className="p-4 text-4xl hover:text-gray-500">
								<Link href="about">About</Link>
							</li>
							<li className="p-4 text-4xl hover:text-gray-500">
								<Link href="${slug}">Projects</Link>
							</li>
							<li className="p-4 text-4xl hover:text-gray-500">
								<Link href="contact">Contact</Link>
							</li>
						</ul>
					</div>

			</div>
		</nav>
	);
};

export default Navbar