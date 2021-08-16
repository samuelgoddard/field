import { useEffect, useState } from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import LogoMark from "./logo-mark";
import ScrollToButton from "./scroll-to-button";

export default function ProgressBar() {
  const { scroll } = useLocomotiveScroll()
  let progressBar = null;
  let [showLogo, setShowLogo] = useState(false)

  // Monitor Page Scroll Progress Percent
  useEffect(() => {
    progressBar = document.querySelector('.progress-bar__progress')

    if (scroll) {
      scroll.on('scroll', ({ limit, scroll }) => {
        const progress = scroll.x / limit.x * 100
        progressBar.style.width = `${progress}%`

        if (progress > 4) {
          setShowLogo(true)
        } else {
          setShowLogo(false)
        } 
      })
    }
  }, [scroll, showLogo])

  return(
    <>
      <div className={`hidden lg:block fixed top-0 left-0 mt-[35px] z-[100] transition-all ease-in-out duration-500 overflow-hidden ml-[18px]`}>
        <ScrollToButton full scrollTarget="#hero">
          <div className={`transition-transform ease-in-out duration-500 ${ showLogo ? 'translate-x-[0px]' : '-translate-x-full'}`}>
            <LogoMark width="w-12 text-soft-black-dark" />
          </div>
        </ScrollToButton>
      </div>
      <div className="hidden lg:block fixed bottom-0 left-0 right-0 w-full bg-soft-black-dark bg-opacity-[0.075] h-[8px] progress-bar z-[40] ml-[85px]">
        <div className="progress-bar__progress absolute bottom-0 left-0 top-0 h-full w-[0px] bg-yellow bg-opacity-100"></div>
      </div>
    </>
  )
}