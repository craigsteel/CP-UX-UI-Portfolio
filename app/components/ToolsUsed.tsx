'use client'
/* eslint-disable react/no-unknown-property */
import _JSXStyle from 'styled-jsx/style'

export default function ToolsUsed() {
  return (
    <section className='my-10 opacity-70 hover:opacity-100 hover:drop-shadow-[0_0px_70px_rgba(0,0,0,1)] hover:scale-105 transition duration-500 ease-in-out'>

      <div className='relative mx-10 mt-10 rounded-lg bg-gradient-to-tr from-slate-950 from-40% via-blue-950 via-60% to-slate-950 '>

        <h2 className="grid pl-10 pt-5 text-2xl uppercase font-light">
          Tools I use
        </h2>

        <div className='p-10 font-light grid md:grid-cols-1 md:gap-6 lg:grid-cols-1 lg:gap-6'>
          <h3 className='text-2xl'>Photoshop  /  Illustrator  /  InDesign  /  Adobe-XD   /  Figma  /  InVision  /  Asana  /  VSC  /  GitHub  /  Google  /  Medium</h3>
          <style jsx>{ `h3 { word-spacing: 1em; } `}</style>
        </div>

      </div>

    </section>
  )
}
