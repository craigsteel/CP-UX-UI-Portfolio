import ScrollToTop from 'react-scroll-to-top'
import { PiArrowSquareUpLight } from "react-icons/pi";

export default function ScrollTotopButton () {
  return (
    <ScrollToTop showUnder={800} className='z-30 bg-white opacity-50 hover:opacity-100 transition duration-800 ease-in-out'>
      <PiArrowSquareUpLight />
    </ScrollToTop>
  )
}

