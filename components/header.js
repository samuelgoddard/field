import { useEffect, useRef } from "react";
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Modal from '@/components/modal'
import MenuTray from "./menu-tray";

export default function Header({ route }) {
  const { scroll } = useLocomotiveScroll()
  const modalEl = useRef(null)
  let progressBar = null;

  // Monitor Page Scroll Progress Percent
  useEffect(() => {
    progressBar = document.querySelector('.menu-button')
    if (scroll) {
      scroll.on('scroll', ({ limit, scroll }) => {
        const progress = scroll.x / limit.x * 100
        progressBar.style.height = `${progress}%`
      })
    }
  }, [scroll])
  
  return (
    <header className="fixed top-0 left-0 right-0 md:right-auto md:bottom-0 h-[80px] md:h-full w-full md:w-[90px] border-b md:border-b-none md:border-r border-black bg-white z-[50] flex items-center justify-center bg-white">
      {/* Menu Button */}
      <button className="w-[55px] h-[55px] rounded-full flex items-center justify-center bg-[#F8F3ED] relative overflow-hidden" onClick={() => modalEl.current.open()}>
        <div className="w-full flex flex-wrap justify-center">
          <span className="w-[52%] h-[3px] bg-black block mb-[5px]"></span>
          <span className="w-[52%] h-[3px] bg-black block"></span>
        </div>
        <span className="menu-button block w-full h-0 absolute bottom-0 left-0 right-0 bg-black bg-opacity-10"></span>
      </button>

      {/* Menu Tray */}
      <Modal ref={modalEl}>
        <MenuTray modalEl={modalEl} route={route} />
      </Modal>
    </header>
  )
}