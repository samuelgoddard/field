import { useEffect } from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function ProgressBar() {
  const { scroll } = useLocomotiveScroll()
  let progressBar = null;

  // Monitor Page Scroll Progress Percent
  useEffect(() => {
    progressBar = document.querySelector('.progress-bar__progress')
    if (scroll) {
      scroll.on('scroll', ({ limit, scroll }) => {
        const progress = scroll.x / limit.x * 100
        progressBar.style.width = `${progress}%`
      })
    }
  }, [scroll])

  return(
    <div className="hidden lg:block fixed bottom-0 left-0 right-0 w-full bg-soft-black-dark bg-opacity-[0.075] h-[8px] progress-bar z-[40] ml-[85px] border-t border-soft-black-dark">
      <div className="progress-bar__progress absolute bottom-0 left-0 top-0 h-full w-[0px] bg-soft-black-dark bg-opacity-100"></div>
    </div>
  )
}