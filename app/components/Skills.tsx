/* eslint-disable react/no-unknown-property */
'use client'
import _JSXStyle from 'styled-jsx/style'

export default function Skills() {
  return (
    <section className='md:my-16 md:mx-16 background-card'>
        <h2 className="grid md:pl-10 md:pt-5 pb-4 text-4xl uppercase font-thin text-slate-950">
          Soft & Hard Skills
        </h2>

      <div className='md:px-10 md:pb-10 uppercase font-light text-slate-950 leading-8 grid md:grid-cols-1 md:gap-6 lg:grid-cols-1 lg:gap-6'>
        <h3>User Research (UX) • User Interface (UI) • User-centric problem-solving • Empathy • Communication • Information Architecture • Critical thinking • Design thinking • Wire-framing • Heigh Fidelity Prototyping • Visual communication • Interaction design • Project Management • Time management • SEO • Digital Marketing • social media</h3>
          <style jsx>{`h3 { word-spacing: .3em; }`}</style>
        </div>
    </section>
  )
}