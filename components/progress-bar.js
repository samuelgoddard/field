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
    <div className="fixed bottom-0 left-0 right-0 w-full bg-black bg-opacity-[0.075] h-[8px] progress-bar ml-[75px]">
      <div className="progress-bar__progress absolute bottom-0 left-0 top-0 h-full w-[0px] bg-black bg-opacity-100"></div>
    </div>
  )
}