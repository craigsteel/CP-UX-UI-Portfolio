/* eslint-disable react/no-unknown-property */
'use client'
import _JSXStyle from 'styled-jsx/style'

export default function Skills() {
  return (
    <section className='md:my-16 opacity-100 md:opacity-70 md:hover:opacity-100 hover:drop-shadow-[0_0px_70px_rgba(0,0,0,1)] md:hover:scale-105 transition duration-500 ease-in-out'>
      <div className='relative md:mx-10 mt-10 rounded-lg bg-gradient-to-tr from-white from-40% via-slate-100 via-60% to-white opacity-100 md:opacity-70 md:hover:opacity-100 hover:drop-shadow-[0_0px_70px_rgba(0,0,0,1)] md:hover:scale-105 transition duration-500 ease-in-out'>

        <h2 className="grid pl-10 pt-5 pb-4 text-4xl uppercase font-thin text-slate-950">
          Skills I Have
        </h2>

        <div className='px-10 pb-10 uppercase font-light text-slate-950 grid md:grid-cols-1 md:gap-6 lg:grid-cols-1 lg:gap-6'>
          <h3>User Experience (UX) • User Interface (UI) • Adobe Creative Suite (XD, Photoshop, Illustrator, Indesign) • Figma • Workshops • Wireframes • Prototyping • Project Management • Team Management • Client Presentations</h3>
          <style jsx>{`h3 { word-spacing: .3em; }`}</style>
        </div>

      </div>
    </section>
  )
}