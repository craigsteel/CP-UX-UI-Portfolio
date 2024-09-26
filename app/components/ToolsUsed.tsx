/* eslint-disable react/no-unknown-property */
'use client'
import _JSXStyle from 'styled-jsx/style'

export default function ToolsUsed() {
  return (
    <section className='md:my-16 md:mx-16 background-card'>
        <h2 className="grid md:pl-10 pt-5 pb-4 text-4xl uppercase text-slate-950 font-thin">
          Tools I use
        </h2>

      <div className='md:px-10 pb-10 font-light leading-8 text-slate-950 uppercase grid md:grid-cols-1 md:gap-6 lg:grid-cols-1 lg:gap-6'>
        <h3>Adobe Creative Suite ( XD • Photoshop • Illustrator • Indesign ) • Figma • Miro • Visual Studio Code (VSC) • Asana • Slack • Github • Google Workspace</h3>
          <style jsx>{`h3 { word-spacing: .2em; }`}</style>
        </div>
    </section>
  )
}
