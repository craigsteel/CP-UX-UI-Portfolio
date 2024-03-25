"use client"

import { SocialIcon } from "react-social-icons"

export default function Footer() {
  return (

  <div className="footer flex bottom-0 mx-5 md:mx-20 flex-wrap mt-12">
    <div className=" relative md:w-2/3 md:opacity-60 p-3">

    <div className="text-[16px] pb-2">
      CRAIG PARFITT - 0786 656 2170
    </div>

    <div className="text-[16px] font-medium">
      Web Application Designed & built using:
    </div>

    <div className="text-[14px] font-extralight pb-2">
      Pen & Paper, Adobe Creative Cloud (Photoshop, Illustrator, XD and MediaEncoder) <br />
      Next.js (Framework) - Sanity (Headless CMS) - Mux (Video delivery) - Deployed (via GitHub on Vercel).
    </div>

    {/* <div>
         To view a larger selection of projects including:
    </div>
    <div className="font-extralight text-[14px]">
      Branding, Packaging, Print and Web Applications Visit -
       <a className="opacity-80 hover:opacity-100 transition duration-300"
         href="https://craigsteel-design.com/"> www.craigsteel-design.com
       </a>
    </div> */}

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
