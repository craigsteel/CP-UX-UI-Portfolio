'use client'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor')
    const links = document.querySelectorAll('a', 'Links', 'hover')
    const cursorText = document.querySelector('.cursor-text')

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursor,{x:clientX,y:clientY})
    }

    const onMouseEnterLink = (event) => {
      const link = event.target;
      if (link.classList.contains('view')) {
        gsap.to(cursor, {scale:5})
        cursorText.style.display = 'block'
      } else {
        gsap.to(cursor,{scale:5})
      }
    }

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 })
      cursorText.style.display = 'none'
    }

    document.addEventListener('mousemove', onMouseMove)
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink)
      link.addEventListener('mouseleave', onMouseLeaveLink)
    })
  })
  return (
    <div id='custom-cursor' className='custom-cursor hidden md:flex'>
      <span className='cursor-text'></span>
    </div>
  )
}

export default Cursor