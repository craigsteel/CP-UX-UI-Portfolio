/* eslint-disable react/no-unknown-property */
'use client'
import _JSXStyle from 'styled-jsx/style'

export default function ToolsUsed() {
  return (
    <section className='opacity-100 md:opacity-70 md:hover:opacity-100 hover:drop-shadow-[0_0px_70px_rgba(0,0,0,1)] md:hover:scale-105 transition duration-500 ease-in-out'>
      <div className='relative md:mx-10 mt-10 rounded-lg bg-gradient-to-tr from-white from-40% via-slate-100 via-60% to-white opacity-100 md:opacity-70 md:hover:opacity-100 hover:drop-shadow-[0_0px_70px_rgba(0,0,0,1)] md:hover:scale-105 transition duration-500 ease-in-out'>

        <h2 className="grid pl-10 pt-5 pb-4 text-4xl uppercase text-slate-950 font-thin">
          Tools I use
        </h2>

        <div className='px-10 pb-10 font-light text-slate-950 uppercase grid md:grid-cols-1 md:gap-6 lg:grid-cols-1 lg:gap-6'>
          <h3>Adobe Creative Suite ( XD • Photoshop • Illustrator • Indesign ) • Figma • Visual Studio Code ( VSC ) • Asana • Slack • Github • Google</h3>
          <style jsx>{`h3 { word-spacing: .2em; }`}</style>
        </div>

      </div>
    </section>
  )
}
