import Image from 'next/image'
import { InfinitySymbol } from './svgs'

export default function Workflow() {
  return (

    <section>
      <div className='relative z-0 md:mx-10 mt-10 mb-20 rounded-lg bg-gradient-to-tr from-white from-40% via-slate-100 via-60% to-white md:opacity-70 opacity-100 md:hover:opacity-100 hover:drop-shadow-[0_0px_70px_rgba(0,0,0,1)] md:hover:scale-105 transition duration-500 ease-in-out'>
        <h2 className="grid pl-5 text-4xl md:pl-10 pt-5 uppercase font-light text-slate-950">
          Workflow
        </h2>

        <div className='px-5 md:px-10 pt-5 pb-12 grid md:grid-cols-3 md:gap-6 text-slate-900 lg:grid-cols-6 lg:gap-6'>
            <div className=''>
              <h3 className='uppercase text-[14px]'>User Research</h3>
              <p className='font-light text-[12px] leading-[22px] pb-5'>
                This provides an important start and should be ongoing.
                Identifying and Interviewing different user types, their likes, needs and potential frustrations.
                Alongside the client uncover the goals for the project and the user’s needs.
                Draft an outline to determine milestones that align with the goals and fit within the budget, deadline and technical resources.
              </p>
            </div>
            <div className=''>
              <h3 className='uppercase text-[14px]'>Brainstorming</h3>
              <p className='font-light text-[12px] leading-[22px] pb-5'>
                Explore the needs and wants of the user and build personas around each type of user
                Research competitors in the market. Gather resources to carry out the project.
                Sketch out rough ideas
              </p>
            </div>
            <div className=''>
              <h3 className='uppercase text-[14px]'>UX Design</h3>
              <p className='font-light text-[12px] leading-[22px] pb-5'>
                Break down the brief into smaller, actionable goals.
                Research established UX patterns for achieving a similar goal.
                Construct user flows to determine how to complete each goal in the least amount of steps.
                Break down the user flows into a system of interconnected components.
                Develop wireframes based on the components.
                Determine various states for each wireframe e.g. empty filled, logged in, error etc
              </p>
            </div>
            <div className=''>
              <h3 className='uppercase text-[14px]'>UI Design</h3>
              <p className='font-light text-[12px] leading-[22px] pb-5'>
                Explore visual design patterns.
                Research framework and/or guidelines if necessary.
                Experiment with different styles, colours and typography most suited to the needs.
                Transform the wireframes into high-fidelity mockups.
                Collaborate with developers to determine any technical constraints related to the visuals.
                Generate a consistent UI kit for reusable components.
              </p>
            </div>
            <div className=''>
              <h3 className='uppercase text-[14px]'>Prototyping</h3>
              <p className='font-light text-[12px] leading-[22px] pb-5'>
                Determine the start, processing and end state for each action.
                Build interactive prototypes for the client to demonstrate motion,feedback, state and context.
                Collaborate with developers to determine any technical constraints related to the visuals.
                Animate visual components such as logos for intro screens and pre-loaders.
              </p>
            </div>
            <div className=''>
            <h3 className='uppercase text-[14px]'>Usability Testing</h3>
            <p className='font-light text-[12px] leading-[22px] pb-5'>
              Usability testing People need to be given specific tasks that you want them to perform.
              Finalise assets for handover to developers.
              Ensure visuals are accessible, on-brand and within cultural boundaries.
              Determine whether the visuals are adaptable to various sizes.
              Collaborate with developers to determine any technical constraints related to the visuals.
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


