/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { InfinitySymbol } from './svgs'

export default function Workflow() {
  return (

    <section>
      <div className='md:my-16 relative z-0 md:mx-10 mt-10 mb-20 rounded-lg bg-gradient-to-tr from-white from-40% via-slate-100 via-60% to-white md:opacity-70 opacity-100 md:hover:opacity-100 hover:drop-shadow-[0_0px_70px_rgba(0,0,0,1)] md:hover:scale-105 transition duration-500 ease-in-out'>
        <h2 className="grid pl-5 text-4xl md:pl-10 pt-5 uppercase font-light text-slate-950">
          Workflow
        </h2>

        <div className='px-5 md:px-10 pt-5 pb-12 grid md:grid-cols-3 md:gap-6 text-slate-900 lg:grid-cols-6 lg:gap-6'>
            <div className=''>
            <h3 className='uppercase text-[14px]'>Discover & Define</h3>
              <p className='font-light text-[12px] leading-[22px] pb-5'>
                Gather project requirements through meetings, user research (surveys, interviews), and competitor analysis.
                <br/>
                Define project goals, target audience, and user personas.
              </p>
            </div>
            <div className=''>
            <h3 className='uppercase text-[14px]'>Information Architecture & Site Mapping</h3>
              <p className='font-light text-[12px] leading-[22px] pb-5'>
                Organise website content logically and define the hierarchy of pages.
                <br/>
                Create a sitemap to visualise the website's structure and user navigation flow.
              </p>
            </div>
            <div className=''>
            <h3 className='uppercase text-[14px]'>Wire framing & Prototyping</h3>
              <p className='font-light text-[12px] leading-[22px] pb-5'>
                Develop low-fidelity wireframes to represent basic layouts and functionalities.
                <br/>
                Create interactive prototypes to test user interactions and gather early feedback.
              </p>
            </div>
            <div className=''>
            <h3 className='uppercase text-[14px]'>Visual Design & UI Refinement</h3>
              <p className='font-light text-[12px] leading-[22px] pb-5'>
                Design the visual elements (icons, buttons, typography, colour schemes) that align with branding and user experience.
                <br/>
                Refine the UI (user interface) for clarity, aesthetics, and user-friendliness.
              </p>
            </div>
            <div className=''>
            <h3 className='uppercase text-[14px]'>Usability Testing & Iteration</h3>
              <p className='font-light text-[12px] leading-[22px] pb-5'>
                Conduct usability testing with target users to identify any usability issues and areas for improvement.
                <br/>
                Iterate on the design based on user feedback and testing results.
              </p>
            </div>
            <div className=''>
            <h3 className='uppercase text-[14px]'>Handoff & Development</h3>
            <p className='font-light text-[12px] leading-[22px] pb-5'>
              Prepare design documentation (style guides, assets) for developers.
              <br/>
              Collaborate with developers to ensure design fidelity translates into the final website.
            </p>
          </div>
        </div>

        <Image
          src={InfinitySymbol}
          fill
          className="-z-10 absolute opacity-10 p-5 bg-no-repeat bg-center"
          loading='lazy'
          alt={'Infinity symbol'}
        />
      </div>
    </section>
  )
}


