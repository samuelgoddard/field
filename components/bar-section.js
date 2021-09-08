import { useEffect, useState } from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { fade } from '@/helpers/transitions'
import { m } from 'framer-motion'
import MetaText from "./meta-text";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function BarSection({title, text, bars}) {
  const { scroll } = useLocomotiveScroll()
  let progressBar = null;
  let [showBars, setShowBars] = useState(false)
  const size = useWindowSize();

  // Monitor Page Scroll Progress Percent
  useEffect(() => {
    progressBar = document.querySelector('.progress-bar__progress')

    if (scroll) {
      scroll.on('scroll', ({ limit, scroll }) => {
        const progress = size.width > 1024 ? scroll.x / limit.x * 100 : scroll.y / limit.y * 100
        progressBar.style.width = `${progress}%`
        console.log(progress)
        if (size.width > 1024 ) {
          if (progress > 67) {
            setShowBars(true)
          } else {
            setShowBars(false)
          }
        } else {
          if (progress > 200) {
            setShowBars(true)
          } else {
            setShowBars(false)
          }
        }
      })
    }
  }, [scroll, showBars])

  return(
    <m.section variants={fade} className="w-full lg:w-[140vw] lg:min-w-[1400px] 2xl:min-w-0 lg:max-w-[1400px] 2xl:max-w-[1400px] lg:h-full whitespace-normal lg:pb-12 lg:flex lg:flex-wrap relative border-t lg:border-t-0 lg:border-l border-soft-black-dark lg:border-r overflow-hidden bg-purple pt-8 lg:pt-0"  id="plan">
      <div className="absolute z-[20] top-0 left-0 bottom-0 h-full border-r border-soft-black-dark lg:border-r-0 lg:hidden w-5 bg-off-white"></div>
      
      <div className="w-10/12 lg:w-10/12 mt-auto pt-[5px] pl-[42px] pr-[25pxw] lg:py-8 lg:px-8 max-w-3xl lg:absolute lg:top-0 lg:left-0 text-off-white z-[5]">
        <div className="mb-6">
          <MetaText>{title}</MetaText>
        </div>
        <p className="block text-[24px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] leading-[1.2] text-off-white">{text}</p>
      </div>

      <div className="lg:flex lg:flex-wrap lg:absolute inset-0 items-end mt-12 lg:mt-0">
        {/* TEST: {JSON.stringify(Array.from(bars))} */}
        {bars.map((e,i) => {
          let backgroundColor = '';
          let height = '';
          let battery = '';
          let textSize = '';

          if (i === 0) {
            backgroundColor = 'bg-blue'
            height = showBars ? 'delay-300 w-[37%] lg:w-1/3 h-[150px] lg:h-[25%]' : 'delay-300 w-[0px] lg:w-1/3 h-[150px] lg:h-0'
            battery = '/images/battery-1.svg'
            textSize = 'text-[22px] lg:text-[47px]'
          } else if (i === 1) {
            backgroundColor = 'bg-off-white'
            height = showBars ? 'delay-150 w-[75%] lg:w-1/3 h-[150px] lg:h-[66%]' : 'delay-150 w-[0px] lg:w-1/3 h-[150px] lg:h-0'
            battery = '/images/battery-2.svg'
            textSize = 'text-[30px] lg:text-[75px]'
          } else {
            backgroundColor = 'bg-orange'
            height = showBars ? 'w-[90%] lg:w-1/3 h-[150px] lg:h-[90%]' : 'w-[0px] lg:w-1/3 h-[150px] lg:h-0'
            battery = '/images/battery-3.svg'
            textSize = 'text-[38px] lg:text-[100px]'
          }

          return (
            <div key={i} className={`w-[37%] lg:w-1/3 pl-[42px] pr-5 lg:px-6 py-3 lg:py-5 flex flex-wrap lg:flex items-center lg:items-start transition-all ease-in-out duration-1000 ${backgroundColor} ${height}`}>
              <div className="w-full relative z-[5]">
                <span className={`w-full block uppercase italic leading-none lg:leading-none mb-1 lg:mb-2 ${textSize}`}>
                  <span className="block overflow-hidden">
                    <span className={`block transition-transform ease-in-out duration-500 ${showBars ? 'delay-300' : 'translate-y-full'}`}>
                      {e.year}
                    </span>
                  </span>
                </span>
                <span className="w-full block text-[13px] lg:text-lg leading-tight lg:leading-tight lg:w-9/12">
                  <span className="block overflow-hidden">
                    <span className={`block transition-transform ease-in-out duration-500 ${showBars ? 'delay-300' : 'translate-y-full'}`}>
                      {e.metaInfo}
                    </span>
                  </span>
                </span>
              </div>
              <img className={`w-[30px] lg:w-[55px] block mt-auto transition-opacity duration-500 ease-in-out ${showBars ? 'opacity-100 delay-300' : 'opacity-0' }`} src={battery} alt="Battery Icon" />
            </div>
          )
        })}
      </div>
    </m.section>
  )
}