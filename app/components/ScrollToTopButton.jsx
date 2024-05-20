import ScrollToTop from 'react-scroll-to-top'
import { PiArrowSquareUpLight } from "react-icons/pi";

export default function ScrollTotopButton () {
  return (
    <div className="relative z-[300]">
      <ScrollToTop showUnder={ 160 }>
        <p className=''>
          <PiArrowSquareUpLight />
        </p>
      </ScrollToTop>

    </div>
  )
}

