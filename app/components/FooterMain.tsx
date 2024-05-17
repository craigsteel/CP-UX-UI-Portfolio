"use client"

import Link from "next/link"
import { SocialIcon } from "react-social-icons"
import ButtonMailto from "./ButtonMailto"


export default function Footer() {
  return (

  <div className="footer flex bottom-0 mx-5 md:mx-20 flex-wrap mt-12">
    <div className=" relative md:w-2/3 md:opacity-60 p-3">

    <div className="text-[16px] uppercase font-normal">
      CONTACT
        </div>

    <div className="text-[16px] font-light pb-2">
          CRAIG PARFITT
          <br />
          <a href={`tel:+44786652170`}>Phone Me +44 786 656 2170</a> •&nbsp;<a href={`mailto:info@craigparfitt.com`}>Email Me info@craigparfitt.com</a>
    </div>

    <div className="text-[16px] uppercase font-normal">
      Web Application Designed and Built Using:
    </div>

    <div className="text-[14px] font-extralight pb-2">
          Pen & Paper • Adobe Creative Cloud  (Photoshop, Illustrator, XD and MediaEncoder) •
      Next.js (Framework) • Sanity (Headless CMS) • Tailwindcss (Utility-first CSS framework) • Mux (Video delivery) • Deployed (via GitHub on Vercel).
    </div>

    <div className="flex flex-row space-x-5 py-5">
        <SocialIcon
          url="https://github.com/craigsteel/CP-UX-UI-Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 40, width: 40 }}
          bgColor="gray"
          className="opacity-60 hover:opacity-100 transition duration-300"
        />

        <SocialIcon
          url="https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 40, width: 40 }}
          className="opacity-60 hover:opacity-100 transition duration-300"
          />

          <SocialIcon
            url="https://linkedin.com/in/craig-parfitt-14660a271"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 40, width: 40 }}
            className="opacity-60 hover:opacity-100 transition duration-300"
          />

      </div>

      </div>
    </div>
  )
}

